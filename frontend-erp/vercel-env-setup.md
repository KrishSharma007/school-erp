# Quick Vercel Environment Variable Setup

## Step-by-Step Instructions:

1. **Go to your Vercel dashboard**: https://vercel.com/dashboard

2. **Select your frontend project**

3. **Go to Settings tab**

4. **Click on "Environment Variables" in the left sidebar**

5. **Add a new environment variable:**
   - **Name**: `VITE_API_BASE_URL`
   - **Value**: `https://your-backend-url.onrender.com/api`
   - **Environment**: Production (and Preview if you want)

6. **Replace `your-backend-url.onrender.com` with your actual backend URL**

7. **Click "Save"**

8. **Redeploy your project** (Vercel will automatically redeploy when you add environment variables)

## Example:
If your backend is deployed at `https://school-erp-backend.onrender.com`, then set:
- **Name**: `VITE_API_BASE_URL`
- **Value**: `https://school-erp-backend.onrender.com/api`

## Verify it's working:
1. After redeployment, open your frontend
2. Open browser developer tools (F12)
3. Check the console for the API URL log message
4. Test admin login and other features

## Common Issues:
- Make sure to include `/api` at the end of your backend URL
- Ensure your backend allows CORS from your frontend domain
- Wait a few minutes after setting the environment variable for it to take effect 