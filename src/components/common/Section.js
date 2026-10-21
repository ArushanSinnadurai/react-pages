import useInView from "../../hooks/useInView";

/**
 * Shared page section: anchor id, scroll-reveal, and the eyebrow + heading
 * pair that every section on the page repeats.
 */
const Section = ({
  id,
  eyebrow,
  heading,
  intro,
  align = "left",
  className = "",
  children,
}) => {
  const [ref, inView] = useInView({ threshold: 0 });
  const centered = align === "center";

  return (
    <section
      id={id}
      ref={ref}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-16 px-6 py-24 reveal ${
        inView ? "reveal-visible" : ""
      } ${className}`}
    >
      <div className="max-w-5xl mx-auto">
        <div className={`mb-14 ${centered ? "text-center" : ""}`}>
          {eyebrow && (
            <p className="text-accent text-sm font-semibold uppercase tracking-[0.3em] mb-3">
              {eyebrow}
            </p>
          )}
          <h2
            id={`${id}-heading`}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            {heading}
          </h2>
          {intro && (
            <p
              className={`text-text-secondary mt-4 ${
                centered ? "" : "max-w-2xl"
              }`}
            >
              {intro}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
