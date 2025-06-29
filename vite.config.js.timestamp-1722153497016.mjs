// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "~", replacement: "/src" }]
  }
});
export {
  vite_config_default as default
};