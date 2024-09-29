import React, { useState, useEffect } from "react";

const Projects = () => {
  const [repos, setRepos] = useState();

  useEffect(() => {
    let url = "https://api.github.com/users/ArushanSinnadurai/repos";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  function repoDetails(str) {
    switch (str) {
      case "aruma":
        return "Personal Blog Website for food reviews";
      case "Flask-Digits-Recognition-Application":
        return "This is simple flask application that implement a canvas and convolutional neural networks (CNN) to allow user to predict hand written image. The CNN was trained on the MNIST data with input image size of 28,28,1 and output of one hot encoding value between 0 to 9.";
      case "react-pages":
        return "Personal Profilo Website";
      case "Sysc2004":
        return "SYSC 2004 Object-Oriented Software Development - School Projects";
      case "Sysc4906":
        return "SYSC 4906 Introducation to Machine Learning - School Projects";
      default:
        return "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.";
    }
  }

  return (
    <div>
      <h1 className="text-center">Projects</h1>
      <div class="pt-6 pl-40 pr-96">
        <div class="grid grid-cols-[50%_50%] pl-72">
          {repos &&
            repos.map((repo) => (
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">
                    {repo.full_name.replace("ArushanSinnadurai/", "")}
                  </div>
                  <p class="text-gray-700 text-base">
                    {repoDetails(
                      repo.full_name.replace("ArushanSinnadurai/", "")
                    )}
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <button class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800g">
                    <a href={repo["svn_url"]} className="inline-block">
                      Learn More
                    </a>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
