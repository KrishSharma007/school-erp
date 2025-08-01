# School ERP - Production Deployment Guide

## Overview
This guide provides step-by-step instructions for deploying the School ERP system to production.

## Prerequisites
- Node.js 16+ and npm 8+
- MongoDB database (Atlas or self-hosted)
- Cloudinary account for media storage
- Domain name and SSL certificate
- Server/VPS or cloud platform (AWS, DigitalOcean, Heroku, etc.)

## Environment Setup

### 1. Backend Environment Variables
Create a `.env` file in the `backend` directory with the following variables:

```env
# Production Environment Configuration
NODE_ENV=production
PORT=5001
MONGODB_URI=your_production_mongodb_uri
JWT_SECRET=your_secure_jwt_secret_here

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# CORS Configuration
CORS_ORIGIN=https://your-domain.com

# Security Configuration
BCRYPT_ROUNDS=12
JWT_EXPIRES_IN=24h
```

### 2. Frontend Environment Variables
Create a `.env.production` file in the `frontend-erp` directory:

```env
VITE_API_BASE_URL=https://your-api-domain.com/api
VITE_APP_NAME=JAI MODERN SCHOOL ERP
```

## Backend Deployment

### 1. Install Dependencies
```bash
cd school-erp/backend
npm install
```

### 2. Setup Admin User
```bash
npm run setup
```

### 3. Start Production Server
```bash
npm run prod
```

### 4. Using PM2 (Recommended)
```bash
# Install PM2 globally
npm install -g pm2

# Start the application
pm2 start server.js --name "school-erp-backend"

# Save PM2 configuration
pm2 save

# Setup PM2 to start on system boot
pm2 startup
```

## Frontend Deployment

### 1. Install Dependencies
```bash
cd school-erp/frontend-erp
npm install
```

### 2. Build for Production
```bash
npm run build:prod
```

### 3. Serve Static Files
The build output will be in the `dist` directory. You can serve it using:

#### Option A: Nginx
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/school-erp/frontend-erp/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api {
        proxy_pass http://localhost:5001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### Option B: Express Static Server
Add to your backend `server.js`:
```javascript
// Serve static files in production
if (NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend-erp/dist")));
  
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend-erp/dist/index.html"));
  });
}
```

## Security Considerations

### 1. Environment Variables
- Never commit `.env` files to version control
- Use strong, unique secrets for JWT_SECRET
- Rotate secrets regularly

### 2. Database Security
- Use MongoDB Atlas or secure your MongoDB instance
- Enable authentication and authorization
- Use SSL/TLS connections
- Regular backups

### 3. API Security
- Rate limiting is already configured
- Helmet.js provides security headers
- CORS is configured for production
- Input validation on all endpoints

### 4. File Upload Security
- File size limits configured
- File type validation
- Cloudinary handles secure file storage

## Monitoring and Logging

### 1. Application Logs
```bash
# View PM2 logs
pm2 logs school-erp-backend

# Monitor application
pm2 monit
```

### 2. Error Tracking
Consider integrating error tracking services:
- Sentry
- LogRocket
- Bugsnag

## Performance Optimization

### 1. Backend
- MongoDB indexes on frequently queried fields
- Connection pooling
- Caching for static data

### 2. Frontend
- Code splitting implemented
- Image optimization
- Lazy loading for components
- CDN for static assets

## Backup Strategy

### 1. Database Backups
```bash
# MongoDB backup
mongodump --uri="your_mongodb_uri" --out=/backup/path

# Automated backup script
0 2 * * * /usr/bin/mongodump --uri="your_mongodb_uri" --out=/backup/path/$(date +\%Y\%m\%d)
```

### 2. File Backups
- Cloudinary provides automatic backups
- Consider additional backup for critical files

## SSL/TLS Configuration

### 1. Let's Encrypt (Free)
```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d your-domain.com
```

### 2. Auto-renewal
```bash
# Test renewal
sudo certbot renew --dry-run

# Add to crontab
0 12 * * * /usr/bin/certbot renew --quiet
```

## Troubleshooting

### Common Issues

1. **CORS Errors**
   - Check CORS_ORIGIN configuration
   - Ensure frontend and backend domains match

2. **MongoDB Connection Issues**
   - Verify MONGODB_URI format
   - Check network connectivity
   - Ensure database user has proper permissions

3. **File Upload Failures**
   - Verify Cloudinary credentials
   - Check file size limits
   - Ensure proper file types

4. **Authentication Issues**
   - Verify JWT_SECRET is set
   - Check token expiration settings
   - Ensure proper CORS configuration

## Maintenance

### Regular Tasks
- Monitor application logs
- Check database performance
- Update dependencies
- Review security patches
- Backup verification

### Updates
```bash
# Update dependencies
npm update

# Test in staging environment first
# Deploy to production
pm2 restart school-erp-backend
```

## Support
For issues or questions:
1. Check application logs
2. Review error tracking
3. Test in development environment
4. Contact development team

---

**Note**: This is a production-ready configuration. Always test thoroughly in a staging environment before deploying to production. 