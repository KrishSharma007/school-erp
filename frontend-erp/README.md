# JAI MODERN SCHOOL - Frontend

This is the frontend application for JAI MODERN SR. SEC. SCHOOL DULHERA, built with React and Vite.

## Features

- **Responsive Design**: Modern, mobile-friendly interface
- **Admin Panel**: Content management system for school administrators
- **Gallery Management**: Upload and manage school photos
- **Notice Board**: Publish and manage school notices
- **Contact Forms**: Student and parent inquiry system
- **Slideshow**: Dynamic homepage slideshow management

## Technology Stack

- **React 19**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icons
- **React Router**: Client-side routing

## Getting Started

### Prerequisites

- Node.js >= 16.0.0
- npm >= 8.0.0

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Environment Variables

Set up your environment variables for production deployment:

```bash
VITE_API_BASE_URL=https://your-backend-url.com/api
```

See `DEPLOYMENT.md` for detailed deployment instructions.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── config/        # Configuration files
├── context/       # React context providers
├── hooks/         # Custom React hooks
├── services/      # API and external services
└── pages/         # Main application pages
```

## Deployment

This project is configured for deployment on Vercel. See `vercel-env-setup.md` for quick setup instructions.
