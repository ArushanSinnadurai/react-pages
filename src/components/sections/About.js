import profilepic from "../../assets/profilepic.jpg";
import Section from "../common/Section";
import { profile, skillGroups } from "../../data/resume";

const About = () => (
  <Section id="about" eyebrow="About me" heading="Get to know me.">
    <div className="flex flex-col md:flex-row gap-12 items-start">
      <div className="w-full md:w-5/12 md:sticky md:top-24">
        <div className="relative">
          <div className="absolute -inset-1 bg-accent/20 rounded-2xl blur-lg"></div>
          <img
            src={profilepic}
            alt={profile.name}
            className="relative w-full aspect-[2/3] object-cover object-top rounded-2xl"
          />
        </div>
      </div>

      <div className="w-full md:w-7/12">
        <p className="text-text-secondary text-lg leading-relaxed mb-10">
          {profile.summary}
        </p>

        <div className="space-y-6">
          {skillGroups.map((group) => (
            <div key={group.id}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-text-muted mb-3">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2.5 list-none p-0 m-0">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="px-3.5 py-1.5 rounded-full border border-accent/40 text-accent text-sm font-medium transition-colors duration-200 hover:bg-accent/10"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

export default About;
