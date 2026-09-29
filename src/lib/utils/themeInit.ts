// localStorage key for a theme the user picked manually
export const THEME_STORAGE_KEY = "theme";

// Runs in <head> before first paint: use the saved choice, otherwise the OS setting.
// Kept as a string so it can be inlined without waiting for React to load.
export const themeInitScript = `(function () {
  var theme;
  try { theme = localStorage.getItem("${THEME_STORAGE_KEY}"); } catch (e) {}
  if (theme !== "light" && theme !== "dark") {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  document.documentElement.className = theme;
})();`;
