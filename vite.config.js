import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";


export default defineConfig({
    plugins: [viteReact()],
    server: {
        port: 3000,
        open: true
    },
    build: {
        outDir: 'build',
      },
})