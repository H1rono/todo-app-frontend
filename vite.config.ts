/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dns from "node:dns";

dns.setDefaultResultOrder("ipv4first");

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: "0.0.0.0",
        proxy: {
            "/api": {
                target: process.env.VITE_API_URL || "http://localhost:3000",
                changeOrigin: true,
            },
        },
    },
    test: {
        coverage: {
            provider: "v8",
            reportsDirectory: "coverage",
            reporter: "lcovonly",
        },
    },
});
