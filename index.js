const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project name?",
      name: "Projectname",
    },
    {
      type: "input",
      message: "Type a Description?",
      name: "Description",
    },
    {
      type: "input",
      message: "Would you like a table of contents?",
      name: "Table of Contents",
    },
    {
      type: "input",
      message: "Enter installation instructions.",
      name: "Installation",
    },
    {
      type: "input",
      message: "Enter Usage infromation.",
      name: "Usage",
    },
    {
      type: "input",
      message: "Who contributed to your project?",
      name: "Contribution",
    },
    {
      type: "input",
      message: "Enter ways you tested application.",
      name: "Test",
    },
    {
      type: "checkbox",
      message: "What badges would you like?",
      name: "Badges",
      choices: ["badge1", "badge2", "badge3"],
    },
  ])
  .then((response) => {
    console.log(response);
    fs.writeFile("README.md", JSON.stringify(response), "utf8", (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("success");
      }
    });
  });

//   Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
