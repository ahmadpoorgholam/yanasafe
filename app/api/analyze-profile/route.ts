import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// Default to mock analysis for local/POC use. Set USE_MOCK_DATA=false and provide PERPLEXITY_API_KEY for live AI.
const USE_MOCK_DATA = process.env.USE_MOCK_DATA !== 'false';

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      return NextResponse.json({
        status: 'error',
        message: 'Content-Type must be application/json',
      }, { status: 400 });
    }

    const { imageUrls, context, location, extraMetadata } = await request.json();

    // Validate request body
    if (!imageUrls || !Array.isArray(imageUrls) || imageUrls.length === 0) {
      return NextResponse.json({
        status: 'error',
        message: 'Invalid request: "imageUrls" must be a non-empty array.',
      }, { status: 400 });
    }

    if (!context || typeof context !== 'string') {
      return NextResponse.json({
        status: 'error',
        message: 'Invalid request: "context" must be a non-empty string.',
      }, { status: 400 });
    }

    let analysisResult;
    if (USE_MOCK_DATA) {
      // Use mock data for testing
      analysisResult = generateMockAnalysis();
     await new Promise(resolve => setTimeout(resolve, 5000));
    } else {
      // Use real data by calling external API
      const prompt = generatePrompt(imageUrls, context, location, extraMetadata);
      const perplexityResponse = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.PERPLEXITY_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-sonar-large-128k-online',
          messages: [{ 
            role: 'user',
                  content: prompt , 
                  images: imageUrls
                     }],
        }),
      });

      if (!perplexityResponse.ok) {
        throw new Error(
          `Perplexity API request failed with status ${perplexityResponse.status}`
        );
      }

      const data = await perplexityResponse.json();

      // Log the full response from Perplexity AI
      //console.log('Perplexity API Response:', JSON.stringify(data, null, 2));

      // Extract JSON and parse additional content into a single field
      const rawContent = data.choices?.[0]?.message?.content; 
      if (!rawContent) {
        throw new Error('Invalid response format: Missing content in choices.');
      }

      analysisResult = extractAndParseContent(rawContent);
    }
    return NextResponse.json({
      status: 'success',
      message: 'Analysis completed successfully',
      data: analysisResult,
    });
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json({
      status: 'error',
      message: error.message || 'Internal server error',
    }, { status: 500 });
  }
}

// Helper function to extract JSON and parse additional content
function extractAndParseContent(content: string): Record<string, any> {
  if (!content) {
    throw new Error('Invalid input: Content is empty or undefined.');
  }

  // Find the start and end of the JSON part
  const startIndex = content.indexOf('{');
  const endIndex = content.lastIndexOf('}');

  if (startIndex === -1 || endIndex === -1) {
    throw new Error('Invalid content format: JSON part not found.');
  }

  // Extract JSON and the remaining text
  const jsonString = content.substring(startIndex, endIndex + 1);


  let parsedJson: Record<string, any>;
  try {
    parsedJson = JSON.parse(jsonString);
  } catch (error) {
    console.error('Failed to parse JSON:', error);
    throw new Error('Invalid JSON format in content.');
  }

  return parsedJson;
}

// Generate the original prompt for external API
function generatePrompt(
  imageUrls: string[],
  context: string,
  location: string | null,
  extraMetadata: Record<string, any> | null
): string {
  return `
    YanaSafe’s mission is to enhance trust and safety in online dating through AI-driven insights, factoring in not just images and user context, but also optional metadata like location or platform details. This additional data can help provide more accurate assessments that align with regional norms, cultural expectations, or platform-specific patterns.

    **Your Task:**
    Analyze the provided profile details (images, context, and optional metadata) and return a structured JSON output. This output helps both:
    1. End-users: Understand the safety score, flags, and suggestions.
    2. ML engineers: Refine models with richer context and improved authenticity checks.

    **Considerations:**
    - **Images (up to 2):** May be personal photos or screenshots of a dating app interface.
      - Authentic, consistent personal photos → higher trust.
      - Recognizable dating app UI in screenshots → slightly higher trust if aligned with context.
      - Stock-like, AI-generated, or inconsistent images → lower trust.
    - **Context (textual info):** Consider bio claims, interests, occupation, or educational details.
      - Coherent, verifiable claims → higher trust.
      - Contradictory or implausible claims → lower trust.
    - **Location & Extra Metadata (Optional):**
      - Location: Understanding that certain regions have unique dating norms or verification options. 
        For example, in a well-known city with prevalent professional networks, claims might be more easily verified.
      - Extra Metadata: Could include platform details (e.g., “profile extracted from [App Name]”), user language, or any hints about user demographics.
      - Use this information to refine scoring. For instance, if the profile claims to be from a well-known professional environment (e.g., a recognized university in Amsterdam), and location = “Amsterdam, NL” fits that narrative, increase trust.
      - If extra metadata indicates the platform is known for verified profiles, a screenshot from that platform may further raise authenticity.

    **Scoring Guidelines (0–100):**
    Start at 50:
    - Image authenticity & format:
      - +10–20 if personal images or a legitimate-looking app screenshot aligns with claims.
      - -10–20 if images are suspicious, fake, or inconsistent.
    - Context & verifiability:
      - +5–15 if context is plausible, matches location/metadatas (e.g., a well-known tech role in a city known for tech startups).
      - -5–15 if claims are grandiose, contradictory, or unsupported.
    - Overall coherence:
      - +5–10 if stable narrative, no major red flags.
      - -5–10 if vague, suspicious details.
    Adjust final score to remain 0–100, with higher meaning fewer concerns.

    **Flags (Potential Concerns):**
    Include short strings describing issues:
    - "Profile created recently"
    - "No verifiable social media presence"
    - "Inconsistent claims"
    - "Images appear stock/AI-generated"
    - "Screenshot UI doesn't match stated claims"
    Add or remove based on this scenario’s findings.

    **Suggestions (Actionable Tips):**
    Based on score:
    - <60: Strong caution (e.g., "Request a video call," "Meet in public")
    - 60–80: Moderate caution (e.g., "Double-check LinkedIn," "Ask mutual friends")
    - >80: Mild caution (e.g., "Public meeting still advised")
    Ensure suggestions reflect both the flags found and the metadata context.

    **JSON Output Requirements:**
    1. Include a summarized version of the raw analysis under a field named \`rawSummary\`. For example:
       - Provide a concise summary of the main points analyzed in the images, context, and metadata.
       - Highlight key findings in a user-friendly manner (e.g., "The profile's context is vague and lacks verifiable details. Images are not suspicious but cannot be verified.")
    2. Maintain the structured JSON format for analysis results:
       - Include the safety score, flags, and suggestions.
       - Add a \`rawAnalysis\` field with the complete raw content for debugging purposes.
       
    **Privacy Considerations:**
      - Handle all personal information with utmost care and in compliance with data protection regulations (e.g., GDPR).
      - Do not store or retain any personally identifiable information (PII) beyond the scope of this analysis.
      - Ensure that the analysis output does not include any raw PII data, only derived insights.
      - Be mindful of potential biases in the analysis and strive for fairness across different demographics.

    **JSON Example:**
    {
      "status": "success",
      "message": "Analysis completed successfully.",
      "data": {
        "analyzedAt": "<ISO 8601 TIMESTAMP>",
        "imageUrls": ["<URL_1>", "<URL_2>"],
        "contextInfo": "<context string>",
        "location": "<optional location>",
        "extraMetadata": <optional metadata object or null>,
        "score": <number>,
        "flags": ["<flag_1>", "<flag_2>", ...],
        "suggestions": ["<suggestion_1>", "<suggestion_2>", ...],
        "rawSummary": "A concise summary of the analysis findings and the reasoning used.",
        "rawAnalysis": "The complete raw analysis content as received."
      }
    }
    Given context: ${context}
    Given the images that are passed troght the API call to you
    Given location: ${location || "The netherlads"}
    Given extraMetadata: ${extraMetadata ? JSON.stringify(extraMetadata) : "None provided"}
  `;
}


function generateMockAnalysis() {
  const scoreRanges = {
    low: { min: 20, max: 40, flags: [
      'High-risk profile indicators',
      'Significant trust concerns',
      'Multiple red flags detected'
    ]},
    medium: { min: 41, max: 60, flags: [
      'Moderate verification challenges',
      'Incomplete profile information',
      'Some inconsistent details'
    ]},
    moderate: { min: 61, max: 75, flags: [
      'Minor trust inconsistencies',
      'Limited social media presence',
      'Partial profile verification needed'
    ]},
    high: { min: 76, max: 90, flags: [
      'Generally trustworthy profile',
      'Minor verification suggestions',
      'Mostly consistent information'
    ]},
    verified: { min: 91, max: 100, flags: [
      'Highly credible profile',
      'Strong social media validation',
      'Multiple verification points'
    ]}
  };

  const categories = Object.keys(scoreRanges) as Array<keyof typeof scoreRanges>;
  const selectedCategory = categories[Math.floor(Math.random() * categories.length)];
  
  const scoreRange = scoreRanges[selectedCategory];
  const score = Math.floor(Math.random() * (scoreRange.max - scoreRange.min + 1)) + scoreRange.min;

  const suggestions = {
    low: [
      'Avoid meeting in person',
      'Request extensive video verification',
      'Do not share personal information',
      'Report suspicious profile'
    ],
    medium: [
      'Meet in public place',
      'Conduct video call before meeting',
      'Verify through mutual connections',
      'Request additional identification'
    ],
    moderate: [
      'Proceed with caution',
      'Request social media verification',
      'Limit initial interactions',
      'Conduct background check'
    ],
    high: [
      'Proceed with standard precautions',
      'Consider initial public meeting',
      'Engage in open communication',
      'Verify basic background details'
    ],
    verified: [
      'Safe to proceed',
      'Normal dating interaction recommended',
      'Standard safety practices apply',
      'Open communication encouraged'
    ]
  };

  const rawSummaries = [
    `Profile analysis reveals ${selectedCategory} trust level with a score of ${score}/100.`,
    `Comprehensive review indicates ${selectedCategory} credibility based on available information.`,
    `Initial assessment suggests ${selectedCategory} risk profile with potential verification needs.`,
    `Algorithmic evaluation points to ${selectedCategory} trustworthiness indicators.`
  ];

  const contextualDetails = [
    'Profile appears recently created',
    'Multiple profile images detected',
    'Consistent location information',
    'Professional background partially verified',
    'Social media links present',
    'Limited interaction history'
  ];

  return {
    score,
    flags: [
      ...scoreRange.flags,
      contextualDetails[Math.floor(Math.random() * contextualDetails.length)]
    ],
    suggestions: suggestions[selectedCategory].slice(0, 2),
    rawSummary: rawSummaries[Math.floor(Math.random() * rawSummaries.length)],
    rawAnalysis: `Detailed analysis of profile with trust category: ${selectedCategory}. Verification score: ${score}/100.`
  };
}

