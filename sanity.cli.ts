import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  project: {
    basePath: "/studio",
  },
  vite: {
    publicDir: false,
  },
});
