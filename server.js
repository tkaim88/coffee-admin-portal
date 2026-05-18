// server.js - Complete backend + frontend server for Render deployment
// This file serves BOTH your API (json-server) AND your built React frontend

// Import required modules
import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express'; // Needed to serve static frontend files

// Get __dirname equivalent in ES modules (required for path resolution)
// This converts file URLs to file system paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create json-server instance
const server = jsonServer.create();

// Connect to your database file (db.json in root directory)
const router = jsonServer.router(path.join(__dirname, 'db.json'));

// Default middlewares (logging, CORS, static serving)
const middlewares = jsonServer.defaults();

// IMPORTANT: Path to your built React frontend files
// After running 'npm run build', Vite creates a 'dist' folder
const frontendPath = path.join(__dirname, 'dist');

// Serve static frontend files (CSS, JS, images from your built React app)
// This makes my React app accessible at the root URL
server.use(express.static(frontendPath));

// Use the PORT environment variable provided by Render, or default to 10000
const PORT = process.env.PORT || 10000;

// Apply json-server default middlewares (logger, CORS, etc.)
server.use(middlewares);

// Apply your API routes (automatically creates /coffees etc. from db.json)
server.use(router);

// CRITICAL: For any request that doesn't match an API route,
// serve the React index.html (handles client-side routing like React Router)
// This must come AFTER the API routes
server.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// Start the server - bind to 0.0.0.0 for Render compatibility
// '0.0.0.0' allows Render to forward requests to your container
server.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📦 API endpoints available at /coffees, /orders`);
  console.log(`🎨 React frontend being served from ${frontendPath}`);
});