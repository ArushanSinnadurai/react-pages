import Section from "../common/Section";
import emphasize from "../../lib/emphasize";
import { education, experience } from "../../data/resume";

const TimelineEntry = ({ job, isLast }) => (
  <li className="relative pl-10 pb-12 last:pb-0">
    {/* Connecting line, drawn behind the node. The last entry has nothing to connect to. */}
    {!isLast && (
      <span
        aria-hidden="true"
        className="absolute left-[7px] top-3 bottom-0 w-px bg-gradient-to-b from-accent/40 to-accent/5"
      />
    )}
    <span
      aria-hidden="true"
      className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 ${
        job.current
          ? "border-accent bg-accent/30 shadow-[0_0_14px_rgba(232,184,75,0.6)]"
          : "border-text-muted bg-dark-primary"
      }`}
    >
      {job.current && (
        <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping motion-reduce:animate-none" />
      )}
    </span>

    <div className="rounded-2xl border border-text-muted/25 bg-dark-secondary/40 p-5 md:p-6 transition-colors duration-200 hover:border-accent/40">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-1">
        <h3 className="text-lg font-semibold text-white">{job.role}</h3>
        {job.current && (
          <span className="px-2.5 py-0.5 rounded-full bg-accent/15 border border-accent/40 text-accent text-[0.65rem] font-semibold uppercase tracking-[0.15em]">
            Current
          </span>
        )}
      </div>

      <p className="text-accent text-sm font-medium">
        {job.company} · {job.location}
      </p>
      <p className="text-text-muted text-xs font-semibold uppercase tracking-[0.18em] mt-1.5 mb-4">
        {job.start} — {job.end}
      </p>

      <ul className="space-y-2.5 list-none p-0 m-0">
        {job.bullets.map((bullet, index) => (
          <li
            key={index}
            className="relative pl-5 text-text-secondary leading-relaxed before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/60"
          >
            {emphasize(bullet)}
          </li>
        ))}
      </ul>
    </div>
  </li>
);

const Experience = () => (
  <Section
    id="experience"
    eyebrow="Experience"
    heading="Where I've worked."
    intro="Five years across data platforms and medical software — and a master's bridging the two."
  >
    <ol className="list-none p-0 m-0">
      {experience.map((job, index) => (
        <TimelineEntry
          key={job.id}
          job={job}
          isLast={index === experience.length - 1}
        />
      ))}
    </ol>

    <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-text-muted mt-16 mb-6">
      Education
    </h3>
    <div className="grid gap-5 sm:grid-cols-2">
      {education.map((item) => (
        <div
          key={item.id}
          className="rounded-2xl border border-text-muted/25 bg-dark-secondary/40 p-5 transition-colors duration-200 hover:border-accent/40"
        >
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <h4 className="text-base font-semibold text-white">{item.degree}</h4>
            {item.inProgress && (
              <span className="px-2.5 py-0.5 rounded-full bg-accent/15 border border-accent/40 text-accent text-[0.65rem] font-semibold uppercase tracking-[0.15em]">
                In progress
              </span>
            )}
          </div>
          <p className="text-accent text-sm font-medium">
            {item.school} · {item.location}
          </p>
          <p className="text-text-muted text-xs font-semibold uppercase tracking-[0.18em] mt-1.5">
            {item.start} — {item.end} · {item.grade}
          </p>
        </div>
      ))}
    </div>
  </Section>
);

export default Experience;
