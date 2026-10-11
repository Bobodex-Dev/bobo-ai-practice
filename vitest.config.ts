import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Only tests/, so a browser test added under e2e/ is never collected here.
    include: ["tests/**/*.test.ts"],
    setupFiles: ["tests/setup.ts"],
    environment: "node",
  },
});
