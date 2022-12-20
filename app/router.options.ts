import { RouterConfig } from "@nuxt/schema";
if (process.client) {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "auto";
    window.addEventListener("beforeunload", () => {
      window.history.scrollRestoration = "auto";
    });
    window.addEventListener("load", () => {
      window.history.scrollRestoration = "auto";
    });
  }
}
export default <RouterConfig>{
  scrollBehavior: (to, from, savedPosition) => {
    let position;
    position = savedPosition || { left: 0, top: 0 };
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    if (to === from) {
      return {
        left: 0,
        top: 0,
        behavior: "smooth",
      };
    }
    return new Promise((resolve) => {});
  },
};
