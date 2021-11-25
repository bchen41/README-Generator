// // TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

// // TODO: Create an array of questions for user input

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your project title?",
      name: "title",
    },
    {
      type: "input",
      message: "Write a brief description about your project:",
      name: "description",
    },
    {
      type: "confirm",
      message: "Do you want a table of contents section?",
      name: "tableContents",
    },
    {
      type: "input",
      message: "What are the steps required to install your project?",
      name: "installations",
    },
    {
      type: "input",
      message: "Provide instructions on how to use your project: ",
      name: "usage",
    },
    {
      type: "input",
      message:
        "Enter the relative pathfile of your screenshot image: (Ex. assets/images/screenshot.png)",
      name: "screenshot",
    },
    {
      type: "list",
      message: "Choose the appropriate license for your project: ",
      name: "license",
      choices: [
        "None",
        "Apache",
        "BSD3",
        "BSD2",
        "GPL",
        "LGPL",
        "MIT",
        "MPL",
        "EPL",
        "CDDL",
      ],
    },
    {
      type: "input",
      message:
        "Include guidelines for how other developers can contribute to your project: ",
      name: "contribution",
    },
    {
      type: "input",
      message: "Write tests for your project: ",
      name: "tests",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
  ]);
};

// // TODO: Create a function to initialize app
const init = () => {
  promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then((data) =>
      fs.writeFileSync("sample README.md", generateMarkdown(data))
    )
    .then(() => console.log("Successfully wrote README.md"))
    .catch((err) => console.error(err));
};

// // Function call to initialize app
init();
