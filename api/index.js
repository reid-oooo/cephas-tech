import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Get the project root directory (one level up from api)
const projectRoot = path.resolve(__dirname, '..');

const app = express();
const port = process.env.PORT || 3000;

// Load Vite manifest to get correct asset paths
let manifest;
try {
  const manifestPath = path.resolve(projectRoot, './dist/client/.vite/manifest.json');
  manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
} catch (error) {
  console.error('Failed to load Vite manifest:', error);
  // In serverless environment, don't exit - just log and continue
  if (process.env.VERCEL !== '1') {
    process.exit(1);
  }
}

// Load and cache HTML template at startup
let htmlTemplate;
try {
  const templatePath = path.resolve(projectRoot, './dist/index.html');
  console.log('Attempting to load HTML template from:', templatePath);
  console.log('Project root:', projectRoot);
  
  // Check if the dist directory exists
  const distPath = path.resolve(projectRoot, './dist');
  if (fs.existsSync(distPath)) {
    console.log('Dist directory exists, contents:', fs.readdirSync(distPath));
  } else {
    console.log('Dist directory does not exist');
  }
  
  htmlTemplate = fs.readFileSync(templatePath, 'utf-8');
  console.log('Successfully loaded HTML template from dist/index.html');
} catch (error) {
  console.log('Using fallback HTML template (dist/index.html not found)');
  console.log('Error details:', error.message);
  // Comprehensive fallback HTML template for serverless environment
  htmlTemplate = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="description" content="Cephas Consulting - Strategic business consulting services built on solid foundations. Transform your business with expert guidance and proven methodologies."/>
    <meta name="keywords" content="business consulting, strategic consulting, management consulting, business transformation, strategy development, organizational consulting"/>
    <meta property="og:title" content="Cephas"/>
    <meta property="og:description" content="Consulting site"/>
    <meta property="og:image" content="/images/cephas.png" type="image/png"/>
    <meta property="og:url" content="https://cephas.tech"/>
    <meta property="og:type" content="website"/>
    <meta property="og:author" content="Cephas Consulting"/>
    <meta property="og:site_name" content="Cephas"/>
    <meta property="twitter:card" content="summary_large_image"/>
    <meta property="twitter:site" content="@cephas_consulting"/>
    <meta property="twitter:title" content="Cephas"/>
    <meta property="twitter:description" content="Consulting site"/>
    <meta property="twitter:image" content="/images/cephas.png" type="image/png"/>
    
    <!-- SEO Enhancements -->
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
    <meta name="googlebot" content="index, follow"/>
    <meta name="language" content="English"/>
    <meta name="revisit-after" content="7 days"/>
    <meta name="theme-color" content="#d97706"/>
    <link rel="canonical" href="https://cephas.tech/"/>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    
    <!-- Vite CSS -->
    <link rel="stylesheet" href="{{CSS_ASSET}}">
    
    <!-- Favicons -->
    <link rel="shortcut icon" href="/images/cephas.png" type="image/png"/>
    <link rel="apple-touch-icon" sizes="180x180" href="/images/cephas.png" type="image/png"/>
    <title>Cephas</title>
  </head>
  <body>
    <div id="root"><!--ssr-outlet--></div>
    <script type="module" src="{{JS_ASSET}}"></script>
  </body>
</html>`;
}

// Helper function to get asset paths from manifest
function getAssetPaths() {
  if (!manifest) {
    // Fallback when manifest is not available
    return {
      js: '/assets/index.js',
      css: []
    };
  }
  
  const clientEntry = manifest['src/react-app/entry-client.jsx'];
  if (!clientEntry) {
    // Fallback when client entry is not found
    return {
      js: '/assets/index.js',
      css: []
    };
  }
  
  return {
    js: `/assets/${clientEntry.file}`,
    css: clientEntry.css ? clientEntry.css.map(css => `/assets/${css}`) : []
  };
}

// Helper function to inject asset paths into HTML template
function injectAssets(template, appHtml) {
  const assets = getAssetPaths();
  
  // Replace SSR placeholder with direct marker replacement
  let html = template.replace('<!--ssr-outlet-->', appHtml);
  
  // Replace CSS placeholder - handle missing CSS gracefully
  const cssAsset = Array.isArray(assets.css) && assets.css.length > 0 ? assets.css[0] : '';
  html = html.replace('{{CSS_ASSET}}', cssAsset);
  
  // Replace JS placeholder - handle both string and array cases
  const jsAsset = Array.isArray(assets.js) ? assets.js[0] : assets.js;
  html = html.replace('{{JS_ASSET}}', jsAsset);
  
  return html;
}

// Cache for the render function
let renderCache = null;

// Function to get the render function (with caching)
async function getRenderFunction() {
  if (renderCache) {
    return renderCache;
  }
  
  try {
    const serverPath = path.resolve(projectRoot, './dist/server/entry-server.js');
    const serverModule = await import(serverPath);
    renderCache = serverModule.render;
    return renderCache;
  } catch (error) {
    console.error('Failed to import server module:', error);
    throw error;
  }
}

// Serve static assets
app.use('/assets', express.static(path.resolve(projectRoot, './dist/client/assets')));
app.use('/images', express.static(path.resolve(projectRoot, './public/images')));

// Handle all routes - use a specific pattern that works
app.get('/', async (req, res) => {
  try {
    const url = req.originalUrl;
    const render = await getRenderFunction();
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
    const render = await getRenderFunction();
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
    const render = await getRenderFunction();
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
    const render = await getRenderFunction();
    const appHtml = render(url);
    
    const html = injectAssets(htmlTemplate, appHtml);
    
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  } catch (error) {
    console.error('SSR Error:', error);
    res.status(500).end('Internal Server Error');
  }
});

// Catch-all for any other routes
app.use(async (req, res) => {
  try {
    const url = req.originalUrl;
    const render = await getRenderFunction();
    const appHtml = render(url);
    
    const html = injectAssets(htmlTemplate, appHtml);
    
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
  } catch (error) {
    console.error('SSR Error:', error);
    res.status(500).end('Internal Server Error');
  }
});

// Export the app for Vercel serverless functions
export default app;

// Only start the server if running locally
if (process.env.NODE_ENV !== 'production' || process.env.VERCEL !== '1') {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  }).on('error', (err) => {
    console.error('Server error:', err);
  });
}