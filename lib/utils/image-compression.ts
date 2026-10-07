/**
 * Image compression utility functions for SafeDate
 * Handles image optimization before upload to Firebase Storage
 */

import imageCompression from 'browser-image-compression';

export interface CompressionOptions {
  maxSizeMB: number;
  maxWidthOrHeight: number;
  useWebWorker?: boolean;
}

/**
 * Compresses an image file according to SafeDate's requirements
 * @param file - The original image file to compress
 * @param customOptions - Optional compression options to override defaults
 * @returns Promise<File> - The compressed image file
 */
export async function compressImage(
  file: File,
  customOptions?: Partial<CompressionOptions>
): Promise<File> {
  const defaultOptions: CompressionOptions = {
    maxSizeMB: 0.5,
    maxWidthOrHeight: 1024,
    useWebWorker: true,
  };

  const options = { ...defaultOptions, ...customOptions };

  try {
    const compressedFile = await imageCompression(file, options);
    return compressedFile;
  } catch (error) {
    console.error('Image compression failed:', error);
    throw new Error('Failed to compress image');
  }
}