import resume from "../../assets/Arushan-Sinnadurai-resume-updated.pdf";
import SocialLinks from "../common/SocialLinks";
import useInView from "../../hooks/useInView";
import scrollToSection from "../../lib/scrollToSection";
import { profile } from "../../data/resume";

const Hero = () => {
  const [ref, inView] = useInView({ threshold: 0 });

  return (
    <section
      ref={ref}
      aria-label="Introduction"
      className={`min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6 reveal ${
        inView ? "reveal-visible" : ""
      }`}
    >
      <div className="text-center">
        <p className="text-accent text-sm font-semibold uppercase tracking-[0.3em] mb-6">
          Hello, I'm
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-hero font-extrabold leading-tight mb-6">
          <span className="text-white block">Arushan</span>
          <span className="text-accent block">Sinnadurai</span>
        </h1>

        <p className="text-xl md:text-2xl font-semibold text-white">
          {profile.title}
        </p>
        <p className="text-text-secondary text-base md:text-lg mt-3 mb-10">
          {profile.role} at{" "}
          <span className="font-semibold text-white">{profile.company}</span>
        </p>

        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary focus-ring text-sm uppercase tracking-wider"
        >
          View Resume
        </a>
        <SocialLinks className="justify-center mt-10" />
      </div>

      <button
        type="button"
        onClick={() => scrollToSection("work")}
        className="focus-ring group mt-16 flex flex-col items-center gap-2 rounded-lg px-4 py-2 text-text-muted hover:text-accent transition-colors duration-200"
      >
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em]">
          See what I build
        </span>
        <svg
          className="w-4 h-4 animate-bounce motion-reduce:animate-none"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </section>
  );
};

export default Hero;
