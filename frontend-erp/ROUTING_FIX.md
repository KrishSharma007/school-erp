# Fixing Client-Side Routing Issues on Vercel

## Problem

When you directly access URLs like `/about`, `/contact`, etc., Vercel returns a 404 error because it doesn't know how to handle client-side routes.

## Solution

I've created two configuration files to fix this:

### 1. `public/_redirects`

```
/*    /index.html   200
```

This tells Vercel to serve `index.html` for all routes and return a 200 status code.

### 2. `vercel.json`

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This provides an alternative configuration that also works with Vercel.

## How to Deploy the Fix

### Step 1: Commit and Push Changes

```bash
git add .
git commit -m "Fix client-side routing for Vercel deployment"
git push
```

### Step 2: Redeploy on Vercel

- Vercel will automatically redeploy when you push changes
- Or manually trigger a redeploy from your Vercel dashboard

### Step 3: Test the Fix

After deployment, test these URLs:

- `https://your-domain.vercel.app/about`
- `https://your-domain.vercel.app/contact`
- `https://your-domain.vercel.app/gallery`
- `https://your-domain.vercel.app/facilities`
- `https://your-domain.vercel.app/academics`

All should now work correctly when accessed directly.

## How It Works

1. **User visits `/about` directly**
2. **Vercel serves `index.html`** (instead of looking for an `/about` file)
3. **React Router takes over** and renders the correct component
4. **User sees the About page** as expected

## Alternative Solutions

If the above doesn't work, you can also try:

### Option 1: Use only `vercel.json`

Delete the `public/_redirects` file and keep only `vercel.json`.

### Option 2: Use only `_redirects`

Delete `vercel.json` and keep only `public/_redirects`.

### Option 3: Add to Vite Config

Add this to your `vite.config.js`:

```javascript
export default defineConfig({
  // ... other config
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
```

## Troubleshooting

### If it still doesn't work:

1. **Clear Vercel cache**: Go to your project settings and clear the cache
2. **Check deployment logs**: Look for any errors in the Vercel deployment logs
3. **Verify file structure**: Make sure both files are in the correct locations
4. **Test locally**: Run `npm run build && npm run preview` to test locally

### Common Issues:

- **File location**: Make sure `_redirects` is in the `public/` folder
- **File format**: Make sure there are no extra spaces or characters
- **Deployment**: Sometimes it takes a few minutes for changes to take effect

## Verification

After deployment, you should be able to:

- ✅ Navigate using the navbar (this always worked)
- ✅ Access URLs directly (this should now work)
- ✅ Refresh the page on any route (this should now work)
- ✅ Share direct links to specific pages (this should now work)
