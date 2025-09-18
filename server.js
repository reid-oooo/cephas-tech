import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Load Vite manifest to get correct asset paths
let manifest;
try {
  const manifestPath = path.resolve(__dirname, './dist/client/.vite/manifest.json');
  manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
} catch (error) {
  console.error('Failed to load Vite manifest:', error);
  process.exit(1);
}

// Load and cache HTML template at startup
const templatePath = path.resolve(__dirname, './dist/index.html');
let htmlTemplate;
try {
  htmlTemplate = fs.readFileSync(templatePath, 'utf-8');
} catch (error) {
  console.error('Failed to load HTML template:', error);
  process.exit(1);
}

// Helper function to get asset paths from manifest
function getAssetPaths() {
  const clientEntry = manifest['src/react-app/entry-client.jsx'];
  if (!clientEntry) {
    throw new Error('Client entry not found in manifest');
  }
  
  return {
    js: `/assets/${clientEntry.file}`,
    css: clientEntry.css ? clientEntry.css.map(css => `/assets/${css}`) : []
  };
}

// Helper function to inject asset paths into HTML template
function injectAssets(template, appHtml) {
  const assets = getAssetPaths();
  
  // Replace SSR placeholder
  let html = template.replace('<div id="root">', `<div id="root">${appHtml}`);
  
  // Replace CSS placeholder
  html = html.replace('{{CSS_ASSET}}', assets.css[0] || '');
  
  // Replace JS placeholder
  html = html.replace('{{JS_ASSET}}', assets.js);
  
  return html;
}

// Import the render function from the built server entry
let render;
try {
  const serverPath = path.resolve(__dirname, './dist/server/entry-server.js');
  const serverModule = await import(serverPath);
  render = serverModule.render;
} catch (error) {
  console.error('Failed to import server module:', error);
  process.exit(1);
}

// Serve static assets
app.use('/assets', express.static(path.resolve(__dirname, './dist/client/assets')));
app.use('/images', express.static(path.resolve(__dirname, './public/images')));

// Handle all routes - use a specific pattern that works
app.get('/', async (req, res) => {
  try {
    const url = req.originalUrl;
    const appHtml = render(url);
    
    // Use cached HTML template
    const html = injectAssets(htmlTemplate, appHtml);
    
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  } catch (error) {
    console.error('SSR Error:', error);
    res.status(500).end('Internal Server Error');
  }
});

app.get('/privacy', async (req, res) => {
  try {
    const url = req.originalUrl;
    const appHtml = render(url);
    
    const html = injectAssets(htmlTemplate, appHtml);
    
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  } catch (error) {
    console.error('SSR Error:', error);
    res.status(500).end('Internal Server Error');
  }
});

app.get('/terms', async (req, res) => {
  try {
    const url = req.originalUrl;
    const appHtml = render(url);
    
    const html = injectAssets(htmlTemplate, appHtml);
    
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  } catch (error) {
    console.error('SSR Error:', error);
    res.status(500).end('Internal Server Error');
  }
});

app.get('/thank-you', async (req, res) => {
  try {
    const url = req.originalUrl;
    const appHtml = render(url);
    
    const html = injectAssets(htmlTemplate, appHtml);
    
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  } catch (error) {
    console.error('SSR Error:', error);
    res.status(500).end('Internal Server Error');
  }
});

// Catch-all for any other routes
app.use((req, res) => {
  try {
    const url = req.originalUrl;
    const appHtml = render(url);
    
    const html = injectAssets(htmlTemplate, appHtml);
    
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  } catch (error) {
    console.error('SSR Error:', error);
    res.status(500).end('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}).on('error', (err) => {
  console.error('Server error:', err);
});