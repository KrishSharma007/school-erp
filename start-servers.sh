#!/bin/bash

echo "🚀 Starting School ERP System..."

# Start backend server
echo "📡 Starting Backend Server..."
cd backend
node server.js &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 3

# Start frontend server
echo "🎨 Starting Frontend Server..."
cd ../frontend-erp
npm run dev &
FRONTEND_PID=$!

echo "✅ Both servers started!"
echo "📡 Backend: http://localhost:5001"
echo "🎨 Frontend: http://localhost:5173"
echo "🔧 Admin Panel: http://localhost:5173/admin"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for user to stop
wait 