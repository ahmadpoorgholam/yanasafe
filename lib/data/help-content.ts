export const helpContent = {
  gettingStarted: {
    title: "Getting Started",
    sections: [
      {
        title: "Welcome to YanaSafe",
        content: `Welcome to YanaSafe, your trusted companion for safer online dating. Using the power of artificial intelligence and a supportive community, YanaSafe helps you navigate the online dating world with confidence. 

Our platform is designed to protect your privacy while providing actionable insights about potential matches. Whether you’re concerned about authenticity, safety risks, or just looking to make informed choices, YanaSafe has the tools you need.

With YanaSafe, you can:
1. Analyze dating profiles to detect potential risks, such as fake photos or suspicious language patterns.
2. Access a library of verified community safety reports to learn from others' experiences.
3. Stay updated with real-time alerts for risks associated with profiles in your area.
4. Use a privacy-first design that ensures your data stays secure.

Getting started is easy: sign up, upload a profile for analysis, and explore reports and insights tailored to your needs.`
      },
      {
        title: "Using Profile Analysis",
        content: `Our profile analysis tool is the core of YanaSafe, designed to provide a thorough review of the profiles you encounter. 

When you upload a profile for analysis, our system uses advanced algorithms to evaluate multiple aspects:
- The authenticity of profile pictures is checked using reverse image search and manipulation detection.
- Language patterns are analyzed to identify suspicious behavior, such as common scam tactics or unnatural phrasing.
- Behavioral red flags, like pressure tactics or requests for sensitive information, are flagged.
- Each profile is assigned a safety score that summarizes the risk level, helping you make informed decisions.

The results are detailed and actionable, offering a combination of insights, recommendations, and community validation.`
      },
      {
        title: "Key Features",
        content: `YanaSafe offers a comprehensive suite of features to make your online dating experience safer and more enjoyable:

- Community Reports: A collection of verified user-submitted reports, providing valuable insights and real-world examples of risks and scams.
- Real-Time Alerts: Notifications about emerging threats, such as scams targeting specific platforms or regions.
- AI-Driven Analysis: Cutting-edge technology that examines profiles for inconsistencies and risks.
- Privacy-Centric Design: Our platform is built with GDPR compliance and your privacy in mind, ensuring secure data handling and anonymous reporting.

These features are designed to empower you to make safer choices while fostering a community dedicated to mutual safety and trust.`
      }
    ]
  },
  safetyGuidelines: {
    title: "Safety Guidelines",
    sections: [
      {
        title: "Essential Safety Practices",
        content: `Navigating online dating can be tricky, but following these safety practices will help protect you:

Before Meeting Someone in Person:
Take time to research the person you’re interacting with. Cross-check their details on social media to confirm consistency. Video calls can help verify their identity before meeting, and always choose a public, well-lit location for initial meetings. Share your plans, including the meeting time and location, with a trusted friend or family member.

During Interactions:
While on a date, remain vigilant and trust your instincts. Stay in public places where you feel safe, and avoid sharing overly personal details too quickly. Keep all interactions on the dating platform until trust is established, as many scams aim to move conversations to less secure channels.

Red Flags to Watch For:
Be alert to behaviors such as requests for financial help, pressure to meet quickly, inconsistent stories, or inappropriate advances. These are often signs of scams or manipulative behavior. If anything feels off, don’t hesitate to take action, whether that’s reporting the profile or ending communication.`
      },
      {
        title: "Using Community Reports",
        content: `Community reports are a cornerstone of YanaSafe, allowing users to learn from real experiences shared by others.

When reviewing reports, you can filter them by location, platform, or type of risk. This helps you identify recurring trends or issues to watch for in your area.

Contributing a report is equally important. Be as detailed as possible, providing clear descriptions and any supporting evidence, such as screenshots or timestamps. The more factual and concise your report, the more valuable it is to the community. Once submitted, you can track its status, verify other users' contributions, and update your report if new information arises.

By engaging with community reports, you’re not just protecting yourself but also contributing to a safer dating environment for everyone.`
      }
    ]
  },
  privacySecurity: {
    title: "Privacy & Security",
    sections: [
      {
        title: "How We Protect You",
        content: `Your privacy and security are the foundation of everything we do at YanaSafe. 

We use advanced encryption technologies to safeguard your data, ensuring that all files and communications are protected from unauthorized access. Files you upload are securely processed and automatically deleted after analysis, and all reports are submitted anonymously to respect your privacy.

Our platform complies with GDPR regulations, giving you full control over your data. You can adjust visibility settings, delete your account, or restrict access to sensitive information whenever you choose.

This proof of concept uses Firebase Authentication. Production forks should add stronger account protections (MFA, session monitoring) before a public launch.`
      },
      {
        title: "Best Practices",
        content: `While YanaSafe provides robust security features, there are steps you can take to maximize your protection:

Securing Your Account:
Use a unique password for your Google account and enable Google 2-Step Verification. Sign out of shared devices after use.

Sharing Information Safely:
Avoid sharing personal details like your home address, workplace, or financial information until trust is well-established. Prefer cautious sharing: keep personal details off first messages and verify independently before meeting.

Handling Reports Responsibly:
When submitting reports, ensure that your information is accurate and factual. Providing clear evidence helps build trust in the community and makes your report more effective. Be prompt in responding to follow-up requests and keep your language objective and respectful.`
      }
    ]
  },
  advancedHelp: {
    title: "Advanced Help",
    sections: [
      {
        title: "Understanding AI Analysis",
        content: `Our AI analysis goes beyond basic checks to provide a comprehensive review of dating profiles. 

The system performs reverse image searches to detect duplicates, manipulated photos, or stock images. Language analysis highlights suspicious patterns, such as overly polished or repetitive phrasing, which may indicate automation or dishonesty. Behavioral red flags, including requests for financial help or inconsistencies in the profile’s story, are flagged and analyzed.

Every analysis concludes with a detailed safety score, which distills these findings into a single, actionable metric, helping you decide how to proceed with the profile.`
      },
      {
        title: "Real-Time Alerts",
        content: `Community reports and help articles are the current way to stay informed. Real-time geo alerts are on the roadmap, not shipped in this POC.`
      },
      {
        title: "Community Contribution",
        content: `The strength of YanaSafe lies in its active and engaged community. By contributing your experiences, you help create a safer space for everyone.

Verified reports add credibility to the platform, and detailed feedback helps others identify risks they might not have noticed. Regular contributions, such as verifying trends or updating reports with new evidence, strengthen the community and make YanaSafe a more effective tool.`
      }
    ]
  }
};

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Flat category/article shape used by help routes and sidebar. */
export const helpCategories = Object.entries(helpContent).map(([key, category]) => ({
  id: key,
  title: category.title,
  articles: category.sections.map((section) => ({
    id: slugify(section.title),
    title: section.title,
    content: section.content,
  })),
}));
