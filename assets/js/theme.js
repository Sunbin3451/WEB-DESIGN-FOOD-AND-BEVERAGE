// assets/js/theme.js
function applyTheme(theme) {
  if (!theme) return;
  const root = document.documentElement;

  root.style.setProperty("--color-primary", theme.colorPrimary);
  root.style.setProperty("--color-bg", theme.colorBg);
  root.style.setProperty("--color-card", theme.colorCard);
  root.style.setProperty("--color-text", theme.colorText);
  root.style.setProperty("--font-heading", theme.fontHeading);
  root.style.setProperty("--border-radius", theme.borderRadius);
}