"use client";

export default function ThemeToggle() {
  function toggleTheme() {
    const next = document.documentElement.dataset.theme !== "dark";
    document.documentElement.dataset.theme = next ? "dark" : "light";
    window.localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme}
      aria-label="Toggle color theme" title="Toggle color theme">
      <span className="theme-moon" aria-hidden="true">☾</span>
      <span className="theme-sun" aria-hidden="true">☀</span>
    </button>
  );
}
