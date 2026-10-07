import { getFirebaseStorage } from "@/lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import imageCompression from "browser-image-compression";

const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/gif'];
const MAX_SIZE_MB = 5;
const MAX_WIDTH = 1024;
const MAX_HEIGHT = 1024;

interface ImageUploadResult {
  url: string;
  path: string;
}

export async function validateImage(file: File): Promise<boolean> {
  if (!ACCEPTED_TYPES.includes(file.type)) {
    throw new Error('Invalid file type. Please upload a JPG, PNG, or GIF image.');
  }

  if (file.size > MAX_SIZE_MB * 1024 * 1024) {
    throw new Error(`File size must be less than ${MAX_SIZE_MB}MB.`);
  }

  return true;
}

export async function compressImage(file: File): Promise<File> {
  const options = {
    maxSizeMB: 0.5,
    maxWidthOrHeight: 1024,
    useWebWorker: true,
  };

  try {
    return await imageCompression(file, options);
  } catch (error) {
    console.error('Image compression error:', error);
    throw new Error('Failed to compress image. Please try again.');
  }
}

export async function uploadImage(userId: string, file: File): Promise<ImageUploadResult> {
  try {
    // Validate image
    await validateImage(file);

    // Compress image
    const compressedFile = await compressImage(file);

    // Generate unique path
    const timestamp = Date.now();
    const path = `images/${userId}/${timestamp}-${file.name}`;
    const storageRef = ref(getFirebaseStorage(), path);

    // Upload to Firebase Storage
    await uploadBytes(storageRef, compressedFile);

    // Get download URL
    const url = await getDownloadURL(storageRef);

    return { url, path };
  } catch (error) {
    console.error('Image upload error:', error);
    throw error;
  }
}

export async function uploadMultipleImages(
  userId: string,
  files: File[]
): Promise<ImageUploadResult[]> {
  try {
    const uploadPromises = files.map(file => uploadImage(userId, file));
    return await Promise.all(uploadPromises);
  } catch (error) {
    console.error('Multiple image upload error:', error);
    throw error;
  }
}