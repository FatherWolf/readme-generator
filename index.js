const inquirer = require("inquirer");
const fs = require("fs");

function generateMarkdown({
  projectname,
  description,
  installation,
  usage,
  contribution,
  test,
  license,
}) {
  const template = `# ${projectname}

## Table of Contents

* [Description](#description)

* [Installation](#installation)

* [Usage](#usage)

* [Contributions](#contribution)

* [Testing](#test)

* [License](#license)

### Description
${description}

### Installation
${installation}

### Usage
${usage}

### Contributions
${contribution}

### Testing
${test}
  
### License
${license}
`;
  return template;
}

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project name?",
      name: "projectname",
    },
    {
      type: "input",
      message: "Type a Description?",
      name: "description",
    },
    {
      type: "input",
      message: "Would you like a table of contents?",
      name: "table",
    },
    {
      type: "input",
      message: "Enter installation instructions.",
      name: "installation",
    },
    {
      type: "input",
      message: "Enter Usage infromation.",
      name: "usage",
    },
    {
      type: "input",
      message: "Who contributed to your project?",
      name: "contribution",
    },
    {
      type: "input",
      message: "Enter ways you tested application.",
      name: "test",
    },
    {
      type: "checkbox",
      message: "What licenses did you use?",
      name: "license",
      choices: [
        "![img](https://img.shields.io/badge/license-MIT-green)",
        "badge2",
        "badge3",
      ],
    },
  ])

  .then((response) => {
    fs.writeFile("README.md", generateMarkdown(response), (error) => {
      if (error) {
        console.log("error");
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
