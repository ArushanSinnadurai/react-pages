import Linkedinlogo from "./linkedin-logo.svg";
import Githublogo from "./GitHub-logo.svg";

const links = [
  {
    href: "https://www.linkedin.com/in/arushan-sinnadurai/",
    label: "LinkedIn",
    icon: Linkedinlogo,
  },
  {
    href: "https://github.com/ArushanSinnadurai",
    label: "GitHub",
    icon: Githublogo,
  },
];

const SocialLinks = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {links.map(({ href, label, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="focus-ring w-10 h-10 rounded-full border border-text-muted flex items-center justify-center hover:border-accent hover:scale-110 transition-all duration-200"
        >
          <img src={icon} alt="" aria-hidden="true" className="w-5 h-5 invert" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
