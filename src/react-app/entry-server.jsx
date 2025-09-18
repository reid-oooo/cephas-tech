import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';

export function render(url) {
  try {
    return renderToString(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    );
  } catch (error) {
    console.error('Server rendering error:', error);
    throw error; // Re-throw to let the server handle it
  }
}
