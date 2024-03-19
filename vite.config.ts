import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/containers/Main/Main.tsx"),
        "blog/[slug]": resolve(
          __dirname,
          "src/containers/BlogPost/BlogPost.tsx"
        ),
      },
    },
  },
  optimizeDeps: {
    include: ["react-router-dom"],
  },
});
