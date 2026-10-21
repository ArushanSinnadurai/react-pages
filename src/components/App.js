import { useCallback, useEffect, useRef, useState } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Hero from "./sections/Hero";
import Pipeline from "./sections/Pipeline";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import useScrollSpy from "../hooks/useScrollSpy";
import scrollToSection, { prefersReducedMotion } from "../lib/scrollToSection";
import { sections } from "../data/resume";

const SECTION_IDS = sections.map((section) => section.id);

const Nav = () => {
  const activeId = useScrollSpy(SECTION_IDS);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef(null);

  const go = useCallback((id) => {
    setMenuOpen(false);
    scrollToSection(id);
  }, []);

  // Escape closes the mobile menu and returns focus to the control that opened it.
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      toggleRef.current?.focus();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const linkClass = (id) =>
    `nav-link ${
      activeId === id
        ? "nav-link-active text-accent"
        : "text-text-secondary hover:text-white"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-primary/80 backdrop-blur-md border-b border-text-muted/20">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: prefersReducedMotion() ? "auto" : "smooth",
            })
          }
          className="focus-ring rounded text-xl font-bold text-white"
        >
          AS<span className="text-accent">.</span>
        </button>

        <div className="hidden sm:flex items-center gap-8">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => go(section.id)}
              aria-current={activeId === section.id ? "true" : undefined}
              className={linkClass(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="focus-ring sm:hidden rounded p-2 text-text-secondary hover:text-white transition-colors duration-200"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="sm:hidden border-t border-text-muted/20 bg-dark-primary/95 px-6 py-4 flex flex-col gap-4"
        >
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => go(section.id)}
              aria-current={activeId === section.id ? "true" : undefined}
              className={`focus-ring rounded text-left text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-200 ${
                activeId === section.id
                  ? "text-accent"
                  : "text-text-secondary hover:text-white"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

const Page = () => (
  <>
    <Hero />
    <Pipeline />
    <About />
    <Experience />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Nav />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Page />} />
            {/* Previously shared links such as /#/about must not render blank. */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
