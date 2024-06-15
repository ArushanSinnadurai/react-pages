import profilepic from "./profilepic.jpg";
import Linkedinlogo from "../homepage/linkedin-logo.svg";
import Githublogo from "../homepage/GitHub-logo.svg";

const About = () => {
  return (
    <div class="flex flex-col">
      <div class="flex flex-col md:flex-row">
        <div class="w-full text-white">
          <img src={profilepic} alt="profilepic" />
        </div>
        <div class="w-full text-center py-4">
          <div class="flex flex-col">
            <div class="py-4 text-4xl font-normal text-gray-900 dark:text-black">
              <h1>Hello! My name is Arushan Sinnadurai</h1>
            </div>
            <div>
              <p class="text-normal font-normal text-gray-900 dark:text-black">
                I am a versatile full stack developer. With extensive experience
                in both front-end and back-end technologies, I bring a
                comprehensive skill set to every project. I excel in creating
                seamless user experiences and robust server-side applications,
                ensuring a cohesive and efficient development process.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex mb-4">
        <div class="w-1/2">
          <p class="text-center">TO-DO - Add email form</p>
        </div>
        <div class="w-1/2">
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
