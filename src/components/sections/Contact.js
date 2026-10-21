import resume from "../../assets/Arushan-Sinnadurai-resume-updated.pdf";
import Section from "../common/Section";
import SocialLinks from "../common/SocialLinks";
import { profile } from "../../data/resume";

const Contact = () => (
  <Section
    id="contact"
    eyebrow="Contact"
    heading="Let's work together."
    intro="Open to conversations about biotech data platforms, bioinformatics, and health informatics."
    align="center"
    className="pb-32"
  >
    <div className="flex flex-col items-center">
      <a
        href={`mailto:${profile.email}`}
        className="btn-primary focus-ring text-sm normal-case tracking-wide"
      >
        {profile.email}
      </a>

      <p className="text-text-muted text-xs font-semibold uppercase tracking-[0.2em] mt-6">
        {profile.location}
      </p>

      <SocialLinks className="justify-center mt-8" />

      <a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring rounded mt-8 text-sm text-text-secondary hover:text-accent underline underline-offset-4 decoration-text-muted hover:decoration-accent transition-colors duration-200"
      >
        Download resume (PDF)
      </a>
    </div>
  </Section>
);

export default Contact;
