import { Fragment, useRef, useState } from "react";

import Section from "../common/Section";
import { pipeline } from "../../data/resume";

const iconProps = {
  className: "w-6 h-6",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const ICONS = {
  sources: () => (
    <svg {...iconProps}>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
      <path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
    </svg>
  ),
  ingest: () => (
    <svg {...iconProps}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </svg>
  ),
  transform: () => (
    <svg {...iconProps}>
      <path d="M3 7h12l-3-3M21 17H9l3 3" />
      <circle cx="18" cy="7" r="2.5" />
      <circle cx="6" cy="17" r="2.5" />
    </svg>
  ),
  serve: () => (
    <svg {...iconProps}>
      <path d="M3 17V9m5 8V5m5 12v-6m5 6V7" />
      <path d="M3 21h18" />
    </svg>
  ),
};

const PANEL_ID = "pipeline-stage-detail";

const Connector = () => (
  <div className="pipeline-connector" aria-hidden="true">
    <span className="pipeline-dot" />
    <span className="pipeline-dot" style={{ animationDelay: "0.8s" }} />
    <span className="pipeline-dot" style={{ animationDelay: "1.6s" }} />
  </div>
);

const Pipeline = () => {
  const [pinned, setPinned] = useState(0);
  const [hovered, setHovered] = useState(null);
  const buttonsRef = useRef([]);

  const activeIndex = hovered ?? pinned;
  const active = pipeline[activeIndex];

  const handleKeyDown = (event, index) => {
    const offset =
      { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key] ?? 0;
    if (!offset) return;

    event.preventDefault();
    const next = (index + offset + pipeline.length) % pipeline.length;
    setPinned(next);
    buttonsRef.current[next]?.focus();
  };

  return (
    <Section
      id="work"
      eyebrow="What I build"
      heading="Clinical data, end to end."
      intro="From instruments and health records through to the dashboards clinicians and operators actually use. Pick a stage to see what I reach for."
      align="center"
    >
      <div className="flex flex-col md:flex-row md:items-center">
        {pipeline.map((stage, index) => {
          const Icon = ICONS[stage.icon];
          const isActive = index === activeIndex;

          return (
            <Fragment key={stage.id}>
              {index > 0 && <Connector />}
              <button
                type="button"
                ref={(node) => (buttonsRef.current[index] = node)}
                onClick={() => setPinned(index)}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setPinned(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                aria-expanded={isActive}
                aria-controls={PANEL_ID}
                className={`focus-ring flex md:flex-col md:shrink-0 items-center gap-3 md:gap-2 px-5 py-4 rounded-2xl border transition-all duration-300 ${
                  isActive
                    ? "border-accent/60 bg-dark-surface text-accent shadow-[0_0_30px_-8px_rgba(232,184,75,0.45)] md:-translate-y-1"
                    : "border-text-muted/40 bg-dark-secondary text-text-secondary opacity-60 hover:opacity-100"
                }`}
              >
                <Icon />
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                  {stage.label}
                </span>
              </button>
            </Fragment>
          );
        })}
      </div>

      <div
        id={PANEL_ID}
        aria-live="polite"
        className="mt-10 rounded-2xl border border-text-muted/30 bg-dark-secondary/60 p-6 md:p-8"
      >
        <h3 className="text-accent text-xs font-semibold uppercase tracking-[0.25em] mb-3">
          {active.label}
        </h3>
        <p className="text-text-secondary leading-relaxed mb-5">{active.blurb}</p>
        <ul className="flex flex-wrap gap-2.5 list-none p-0 m-0">
          {active.tools.map((tool) => (
            <li
              key={tool}
              className="px-3.5 py-1.5 rounded-full border border-accent/40 text-accent text-sm font-medium"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Pipeline;
