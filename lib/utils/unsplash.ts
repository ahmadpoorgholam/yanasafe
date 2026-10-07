/**
 * Unsplash image utilities for YanaSafe
 * Handles image fetching and fallback mechanisms
 */

// Fallback images in case the Unsplash API fails
export const fallbackImages = {
  hero: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80", // Couple walking in park
  features: [
    "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80", // Safe meeting
    "https://images.unsplash.com/photo-1521310192545-4ac7951413f0?auto=format&fit=crop&q=80", // Community support
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"  // Protection concept
  ]
};

interface UnsplashImage {
  url: string;
  alt: string;
  credit: {
    name: string;
    link: string;
  };
}

export async function getRandomImage(query: string): Promise<UnsplashImage> {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${query}&orientation=landscape`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`
        }
      }
    );

    if (!response.ok) throw new Error('Failed to fetch image');

    const data = await response.json();
    return {
      url: data.urls.regular,
      alt: data.alt_description || 'Unsplash Image',
      credit: {
        name: data.user.name,
        link: data.user.links.html
      }
    };
  } catch (error) {
    console.error('Error fetching Unsplash image:', error);
    return {
      url: fallbackImages.hero,
      alt: 'Safe and loving relationships',
      credit: {
        name: 'Unsplash',
        link: 'https://unsplash.com'
      }
    };
  }
}