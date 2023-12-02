import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/new_mn_state_flag/",
  plugins: [react()],
  build: {
    outDir: "./docs",
  },
});
