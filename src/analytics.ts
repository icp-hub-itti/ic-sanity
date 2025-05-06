import { initOrbiter } from "@junobuild/analytics";

export const initAnalytics = () => {
  if (
    import.meta.env.MODE === "development" ||
    !import.meta.env.PUBLIC_ORBITER_ID
  ) {
    return;
  }

  initOrbiter({
    options: {
      userAgentParser: true,
      performance: true,
    },
  });
};
