import axios from 'axios';

// Base URL for your backend API
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api', // Update with your backend URL
  withCredentials: true, // Include credentials (e.g., cookies)
});

// Add interceptors to attach tokens to requests
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Or retrieve from cookies
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
