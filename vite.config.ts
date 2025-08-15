import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/Portfolio_Website/", // Required for GitHub Pages deployment
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  // componentTagger removed
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
