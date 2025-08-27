import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true, // allows using describe/it/expect without importing
    environment: "jsdom", // simulates browser environment
    setupFiles: "./src/setupTests.ts", // optional: global test setup
    coverage: {
      reporter: ["text", "json", "html"], // optional: coverage reports
    },
  },
});
