import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // 1. Import path utilities

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 2. Map '@' to your project's react-app source directory
      "@": path.resolve(__dirname, "./src/react-app"), 
    },
  },
});
