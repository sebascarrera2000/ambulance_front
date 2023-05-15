import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const PORT = process.env.PORT || 8080;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: PORT,
  },
});
