import { useEffect, useState } from "react";

import { NAV_HEIGHT } from "../lib/scrollToSection";

/**
 * Tracks which section is currently in view so the nav can highlight it.
 * Returns the active section id, or null before the first section is reached.
 */
const useScrollSpy = (ids) => {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const visible = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio);
          } else {
            visible.delete(entry.target.id);
          }
        });

        // Several sections can be on screen at once — highlight the one
        // showing the most of itself, falling back to document order.
        const best = ids
          .filter((id) => visible.has(id))
          .sort((a, b) => visible.get(b) - visible.get(a))[0];

        setActiveId(best ?? null);
      },
      {
        rootMargin: `-${NAV_HEIGHT}px 0px 0px 0px`,
        threshold: [0.1, 0.3, 0.5, 0.7],
      }
    );

    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [ids]);

  return activeId;
};

export default useScrollSpy;
