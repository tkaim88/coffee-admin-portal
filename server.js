// server.js - Serves BOTH the JSON API and the built React frontend
import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express'; // Needed to serve static frontend files

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create json-server instance
const server = jsonServer.create();

// Connect to your database file
const router = jsonServer.router(path.join(__dirname, 'db.json'));

// Default middlewares (logging, CORS, etc.)
const middlewares = jsonServer.defaults();

// IMPORTANT: Path to your built React frontend files
// After running 'npm run build', Vite creates a 'dist' folder
const frontendPath = path.join(__dirname, 'dist');

// 1. Serve static frontend files (CSS, JS, images)
server.use(express.static(frontendPath));

const PORT = process.env.PORT || 10000;

// 2. Apply json-server default middlewares
server.use(middlewares);

// 3. Apply your API routes (creates /coffees, /orders, etc.)
server.use(router);

// 4. CRITICAL: For any request that doesn't match an API route,
//    serve the React index.html (handles client-side routing)
server.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// Start the server
server.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📦 API available at /coffees, /orders`);
  console.log(`🎨 React frontend being served from ${frontendPath}`);
});