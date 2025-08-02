// API Configuration
// This file centralizes all API-related configuration

// Import the API base URL from environment configuration
import { API_BASE_URL } from './environment';

// Export the base URL for use in other files
export { API_BASE_URL };

// Helper function to get full API URL for a specific endpoint
export const getApiUrl = (endpoint) => {
  // Remove leading slash if present to avoid double slashes
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  return `${API_BASE_URL}/${cleanEndpoint}`;
};

// Common headers for API requests
export const getAuthHeaders = () => {
  const token = localStorage.getItem('adminToken');
  return {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
};

// Headers for file uploads (without Content-Type to let browser set it)
export const getUploadHeaders = () => {
  const token = localStorage.getItem('adminToken');
  return {
    'Authorization': `Bearer ${token}`,
  };
}; 