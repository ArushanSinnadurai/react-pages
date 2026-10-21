/** Height of the fixed nav in App.js (h-16). Scroll targets sit below it. */
export const NAV_HEIGHT = 64;

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Scrolls a section into view, clear of the fixed nav.
 *
 * Note: this cannot be an `href="#id"` anchor — HashRouter owns the URL hash,
 * so a fragment link would be parsed as a route change.
 */
const scrollToSection = (id) => {
  const target = document.getElementById(id);
  if (!target) return;

  const top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;

  window.scrollTo({
    top: Math.max(top, 0),
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  });
};

export default scrollToSection;
