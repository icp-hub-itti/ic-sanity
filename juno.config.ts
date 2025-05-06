import { defineConfig } from "@junobuild/config";

export default defineConfig(({ mode }) => ({
  satellite: {
    id: "<your-satellite-id>",
    source: "dist",
    predeploy: [
      "rm -rf dist .sanity",
      `pnpm build --mode ${mode}`, // Build the Astro + Sanity website
      "pnpm sanity build dist/studio -y", // compile Sanity Studio manually
    ],
    storage: {
      rewrites: [
        // Refreshing a page like /studio/structures actually renders the content of the home page
        // This rewrite makes sure that this doesn't happen
        {
          source: "/studio/**",
          destination: "/studio",
        },
      ],
    },
  },
  // Uncomment this section to enable Juno Analytics. See the README for more details.
  // orbiter: {
  //   id: "<your-orbiter-id>",
  // },
}));
