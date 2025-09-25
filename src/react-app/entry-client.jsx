import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const container = document.getElementById('root');

// Check if we're in development mode (no SSR content) or production (with SSR)
if (container.innerHTML.trim() === '<!--ssr-outlet-->' || container.innerHTML.trim() === '') {
  // Development mode - use createRoot
  const root = createRoot(container);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
} else {
  // Production mode - use hydrateRoot
  hydrateRoot(
    container,
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
