# School ERP Backend

This is the backend API for the School ERP system, built with Node.js, Express, and MongoDB.

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure Environment Variables

Edit `config.env` file and add your MongoDB Atlas connection string:

```env
# MongoDB Connection String
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/school_erp?retryWrites=true&w=majority

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=dp2gglnh7
CLOUDINARY_API_KEY=your_cloudinary_api_key_here
CLOUDINARY_API_SECRET=your_cloudinary_api_secret_here

# Server Configuration
PORT=5000
NODE_ENV=development
```

### 3. Start the Server

```bash
# Development mode
npm run dev

# Production mode
npm start
```

The server will run on `http://localhost:5001`

## API Endpoints

### Gallery Images

- `GET /api/gallery` - Get all gallery images
- `GET /api/gallery/category/:category` - Get images by category
- `POST /api/gallery` - Add new gallery image
- `PATCH /api/gallery/:id` - Update gallery image
- `DELETE /api/gallery/:id` - Delete gallery image

### Slideshow Images

- `GET /api/slideshow` - Get all active slideshow images
- `POST /api/slideshow` - Add new slideshow image
- `PATCH /api/slideshow/:id` - Update slideshow image
- `DELETE /api/slideshow/:id` - Delete slideshow image
- `PATCH /api/slideshow/:id/toggle` - Toggle image active status

### Notices

- `GET /api/notices` - Get all active notices
- `GET /api/notices/type/:type` - Get notices by type
- `POST /api/notices` - Add new notice
- `PATCH /api/notices/:id` - Update notice
- `DELETE /api/notices/:id` - Delete notice
- `PATCH /api/notices/:id/toggle` - Toggle notice active status

## Database Models

### GalleryImage

- `url` (String, required) - Cloudinary image URL
- `title` (String, required) - Image title
- `description` (String) - Image description
- `category` (String) - Image category (events, students, facilities, sports, general)
- `date` (String, required) - Upload date
- `public_id` (String, required) - Cloudinary public ID
- `folder` (String) - Cloudinary folder
- `active` (Boolean) - Active status

### SlideshowImage

- `url` (String, required) - Cloudinary image URL
- `title` (String, required) - Image title
- `subtitle` (String) - Image subtitle
- `description` (String) - Image description
- `category` (String) - Image category (general, events, academic)
- `date` (String, required) - Upload date
- `public_id` (String, required) - Cloudinary public ID
- `folder` (String) - Cloudinary folder
- `active` (Boolean) - Active status
- `order` (Number) - Display order

### Notice

- `title` (String, required) - Notice title
- `content` (String, required) - Notice content
- `image` (Object) - Associated image {url, public_id}
- `date` (String, required) - Notice date
- `type` (String) - Notice type (general, admission, event, academic, sports)
- `priority` (String) - Priority level (low, medium, high)
- `active` (Boolean) - Active status
- `author` (String) - Notice author
