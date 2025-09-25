import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: true,
  },
  root: '.',
  publicDir: 'public',
  build: {
    chunkSizeWarningLimit: 5000,
    manifest: true,
    rollupOptions: {
      input: {
        main: 'index-vite.html',
        client: 'src/react-app/entry-client.jsx',
        server: 'src/react-app/entry-server.jsx',
      },
    },
  },
  ssr: {
    noExternal: ['react-router-dom', 'react-router'],
    external: ['react', 'react-dom'],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});