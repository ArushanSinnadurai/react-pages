import Linkedinlogo from "./linkedin-logo.svg";
import Githublogo from "./GitHub-logo.svg";
import resumelogo from "./resume.svg";
import resume from "./Arushan Sinnadurai resume.pdf";

const Homepage = () => {
  return (
    <body>
      <div className="landing-section">
        <h1>Hi, I am Arushan Sinnadurai, A data engineer at 8x8</h1>
        <p></p>
        <ul class="links">
          <li>
            <a
              href="https://www.linkedin.com/in/arushan-sinnadurai/"
              target="_blank"
              rel="noopener noreferrer"
              title="https://www.linkedin.com/in/arushan-sinnadurai/"
            >
              <img src={Linkedinlogo} alt="logo" width="100" height="100" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ArushanSinnadurai"
              target="_blank"
              rel="noopener noreferrer"
              title="https://github.com/ArushanSinnadurai"
            >
              <img src={Githublogo} alt="logo" width="100" height="100" />
            </a>
          </li>
          <li>
            <a href={resume} title="Resume">
              <img
                src={resumelogo}
                alt="logo"
                width="100"
                target="_blank"
                rel="noopener noreferrer"
                height="100"
              />
            </a>
          </li>
        </ul>
      </div>
    </body>
  );
};

export default Homepage;
