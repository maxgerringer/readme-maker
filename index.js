const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");
const axios = require("axios");


const questions = [
   {
      type: "input",
      name: "username",
      message: "What is your GitHub username? ",
      default: "maxgerringer",
   },
   {
      type: "input",
      name: "repo",
      message: "Provide the link to your repo: ",
      default: "https://github.com/maxgerringer/readme-maker",
   },
   {
      type: "input",
      name: "title",
      message: "What is the title of your project/repo? ",
      default: "README.md Generator",
   },
   {
      type: "input",
      name: "description",
      message: "Describe your project: ",
      default: "Generate a good README.md file with a CLI application.",
   },
   {
      type: "input",
      name: "installation",
      message: "Provide installation instructions: ",
      default: "Run npm install",
   },
   {
      type: "input",
      name: "usage",
      message: "Describe how to use your project: ",
      default: "Run node index.js",
   },
   {
      type: "input",
      name: "license",
      message: "Provide license/badge link info: ",
      default: "![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)"
   },
   {
      type: "input",
      name: "contributors",
      message: "Who are the contributors? ",
      default: "Max R. Gerringer",
   },
   {
      type: "input",
      name: "tests",
      message: "Describe the tests: ",
      default: "Tests were performed, this README.md was created using this tool."
   },
   {
      type: "input",
      name: "development",
      message: "Describe future development of this application/repo: ",
      default: "Add function to generate unique badges based on user input."
   },
   {
      type: "input",
      name: "badge",
      message: "Add a unique badge to your README (copy the link here): ",
      default: "![My badge](https://img.shields.io/badge/Created%20by-%40maxgerringer-blue)"
   },
];

function writeToFile(fileName, data) {
   fs.writeFile(fileName, data, err => {
      if (err) { throw err; };
      console.log("README.md created successfully!");
   });
};

function init() {
   inquirer.prompt(questions).then(data => {
      axios
         .get("https://api.github.com/users/" + data.username)
         .then(res => {
            const github= {
               email: res.data.email,
               name: res.data.name,
               profile: res.data.html_url,
            };
            writeToFile("README.md", markdown(data, github));
         });
   });
};

init();
