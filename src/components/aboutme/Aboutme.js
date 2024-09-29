import React from "react";
import profilepic from "./profilepic.jpg";
import Linkedinlogo from "../HomePage/linkedin-logo.svg";
import Githublogo from "../HomePage/GitHub-logo.svg";

const AboutMe = () => {
  return (
    <div class="flex flex-col">
      <div class="flex flex-col md:flex-row">
        <div class="w-full text-center py-4">
          <div class="flex flex-col pt-32 pr-42">
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
        <div class="w-full text-white pt-28 pl-32">
          <img
            src={profilepic}
            alt="profilepic"
            class="h-auto max-w-xl rounded-lg shadow-xl dark:shadow-gray-800
            "
          />
          <div class="flex flex-row-reverse pt-6 pr-96">
            <div>
              <a
                href="https://www.linkedin.com/in/arushan-sinnadurai/"
                target="_blank"
                rel="noopener noreferrer"
                title="https://www.linkedin.com/in/arushan-sinnadurai/"
              >
                <img src={Linkedinlogo} alt="logo" width="100" height="100" />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/ArushanSinnadurai"
                target="_blank"
                rel="noopener noreferrer"
                title="https://github.com/ArushanSinnadurai"
              >
                <img src={Githublogo} alt="logo" width="100" height="100" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
