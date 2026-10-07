/**
 * Validation utilities for SafeDate
 * Provides common validation functions used across the application
 */

/**
 * Validates an email address
 * @param email - The email address to validate
 * @returns boolean - Whether the email is valid
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates a password meets minimum requirements
 * @param password - The password to validate
 * @returns boolean - Whether the password meets requirements
 */
export function isValidPassword(password: string): boolean {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return passwordRegex.test(password);
}

/**
 * Validates image file type and size
 * @param file - The file to validate
 * @returns boolean - Whether the file is valid
 */
export function isValidImage(file: File): boolean {
  const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
  const maxSize = 5 * 1024 * 1024; // 5MB

  return validTypes.includes(file.type) && file.size <= maxSize;
}