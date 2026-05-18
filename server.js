import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// CRITICAL FOR RENDER: Bind to 0.0.0.0 and use PORT environment variable
const PORT = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

// This ensures Render can detect the port
server.listen(PORT, '0.0.0.0', () => {
  console.log(`JSON Server is running on port ${PORT}`);
});