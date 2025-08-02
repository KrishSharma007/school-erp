# Frontend Deployment Guide

## Environment Variables Setup

To deploy your frontend to production and connect it to your deployed backend, you need to set up environment variables.

### For Vercel Deployment:

1. **Go to your Vercel project dashboard**
2. **Navigate to Settings > Environment Variables**
3. **Add the following environment variable:**

```
Name: VITE_API_BASE_URL
Value: https://your-backend-url.onrender.com/api
```

Replace `your-backend-url.onrender.com` with your actual deployed backend URL.

### For Other Platforms:

Set the environment variable `VITE_API_BASE_URL` to your deployed backend URL.

### Example URLs:

- **Development**: `http://localhost:5001/api`
- **Production**: `https://your-backend-url.onrender.com/api`

### How it works:

1. The application will automatically detect if it's running in development or production
2. In development, it will use localhost by default
3. In production, it will use the environment variable `VITE_API_BASE_URL`
4. If no environment variable is set in production, it will fall back to a default URL

### Testing:

After setting the environment variable:
1. Redeploy your frontend
2. Check the browser console in development mode to see which API URL is being used
3. Test that your frontend can communicate with your deployed backend

### Troubleshooting:

- Make sure your backend URL is correct and includes `/api` at the end
- Ensure your backend allows CORS requests from your frontend domain
- Check that your backend is running and accessible 