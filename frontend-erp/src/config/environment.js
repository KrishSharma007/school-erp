// Environment Configuration
// This file helps manage environment-specific settings

// Get the current environment
const isDevelopment = import.meta.env.DEV;
const isProduction = import.meta.env.PROD;

// API Base URL configuration
// In development, use localhost
// In production, use the deployed backend URL
const getApiBaseUrl = () => {
  // Check if environment variable is set
  if (import.meta.env.VITE_API_BASE_URL) {
    return import.meta.env.VITE_API_BASE_URL;
  }
  
  // Fallback URLs
  if (isDevelopment) {
    return 'http://localhost:5001/api';
  }
  
  // For production, you should set VITE_API_BASE_URL in your deployment environment
  // This is a fallback that you should replace with your actual deployed backend URL
  return 'https://your-backend-url.onrender.com/api';
};

export const API_BASE_URL = getApiBaseUrl();

// Log the API URL in development for debugging
if (isDevelopment) {
  console.log('API Base URL:', API_BASE_URL);
}

// Export environment info
export const ENV = {
  isDevelopment,
  isProduction,
  apiBaseUrl: API_BASE_URL,
}; 