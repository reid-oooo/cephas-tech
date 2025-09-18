import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

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
    
    // Read the HTML template
    const templatePath = path.resolve(__dirname, './dist/index.html');
    const template = fs.readFileSync(templatePath, 'utf-8');
    
    // Replace the SSR placeholder with rendered content
    const html = template.replace('<div id="root">', `<div id="root">${appHtml}`);
    
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
    
    const templatePath = path.resolve(__dirname, './dist/index.html');
    const template = fs.readFileSync(templatePath, 'utf-8');
    const html = template.replace('<div id="root">', `<div id="root">${appHtml}`);
    
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
    
    const templatePath = path.resolve(__dirname, './dist/index.html');
    const template = fs.readFileSync(templatePath, 'utf-8');
    const html = template.replace('<div id="root">', `<div id="root">${appHtml}`);
    
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
    
    const templatePath = path.resolve(__dirname, './dist/index.html');
    const template = fs.readFileSync(templatePath, 'utf-8');
    const html = template.replace('<div id="root">', `<div id="root">${appHtml}`);
    
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
    
    const templatePath = path.resolve(__dirname, './dist/index.html');
    const template = fs.readFileSync(templatePath, 'utf-8');
    const html = template.replace('<div id="root">', `<div id="root">${appHtml}`);
    
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