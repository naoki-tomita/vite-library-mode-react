import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "index.tsx",
      formats: ["umd"],
      name: "sample",
      fileName: "bundle"
    }
  }
})
