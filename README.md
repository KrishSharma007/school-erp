# School ERP System

A full-stack school management system built with React (frontend) and Node.js/Express/MongoDB (backend).

## Project Structure

```
school-erp/
├── frontend/          # React application
│   ├── src/          # React components and logic
│   ├── public/       # Static assets
│   ├── package.json  # Frontend dependencies
│   └── vite.config.js
├── backend/          # Node.js/Express server
│   ├── models/       # MongoDB models
│   ├── routes/       # API routes
│   ├── server.js     # Main server file
│   ├── config.env    # Environment variables
│   └── package.json  # Backend dependencies
└── README.md         # This file
```

## Quick Start

### 1. Start Backend Server

```bash
cd backend
npm install
node server.js
```

Backend will run on: `http://localhost:5001`

### 2. Start Frontend Server

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on: `http://localhost:5173`

## Features

- **Admin Panel**: Upload and manage images, notices
- **Gallery Management**: Organize images by categories
- **Slideshow Management**: Control homepage slideshow
- **Notice Board**: Create and manage school notices
- **Cloudinary Integration**: Image upload and storage
- **MongoDB Database**: Persistent data storage

## API Endpoints

- `GET /api/health` - Server health check
- `GET /api/gallery` - Get all gallery images
- `POST /api/gallery` - Add gallery image
- `GET /api/slideshow` - Get active slideshow images
- `POST /api/slideshow` - Add slideshow image
- `GET /api/notices` - Get active notices
- `POST /api/notices` - Add notice

## Technologies Used

**Frontend:**

- React 18
- Vite
- Tailwind CSS
- React Router DOM

**Backend:**

- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- Mongoose ODM
- Cloudinary (Image storage)

## Environment Setup

### Backend (.env)

```env
MONGODB_URI=your_mongodb_atlas_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
PORT=5001
```

## Access Points

- **Main Website**: http://localhost:5173
- **Admin Panel**: http://localhost:5173/admin
- **Backend API**: http://localhost:5001/api
# school-erp
