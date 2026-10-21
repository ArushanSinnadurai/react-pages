import { useEffect, useRef, useState } from "react";

/**
 * Reveals an element once it scrolls into view. Returns [ref, inView].
 * Stops observing after the first intersection so the reveal never replays.
 */
const useInView = ({ threshold = 0.15, rootMargin = "0px 0px -60px 0px" } = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Without IntersectionObserver, show the content rather than hiding it forever.
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
};

export default useInView;
