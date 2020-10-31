const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require("fs");

// array of questions for user
const questions =
    [
        {
            type: "input",
            message: "What is your Project Title?",
            name: "title"
        },
        {
            type: "input",
            message: "Describe your project.",
            name: "describe"
        },
        {
            type: "input",
            message: "Please, enter any installation instructions.",
            name: "install"
        },
        {
            type: "input",
            message: "Please, enter any usage information.",
            name: "usage"
        },
        {
            type: "input",
            message: "Please, enter your project's contribution guidelines.",
            name: "contribute"
        },
        {
            type: "input",
            message: "Please, enter any testing instructions.",
            name: "testing"
        },
        {
            type: "list",
            message: "Choose your license from the list below:",
            name: "license",
            choices: [
                'MIT',
                'ISC',
                'Apache 2.0',
                'GPL v3'
            ]
        },
        {
            type: "input",
            message: "What is your GitHub Username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your GitHub Repository  Name? (no spaces)",
            name: "projectName"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"
        }
    ];

// function to write README file
function writeToFile(fileName, data) {
    // let license = ''

    // switch (data.license) {
    //     case 'MIT':
    //         license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    //         break;
    //     case 'ISC':
    //         license = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    //         break;
    //     case 'Apache 2.0':
    //         license = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    //         break;
    //     case 'GPL v3':
    //         license = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    //         break;
    // }

    // Readme Template
    // let markdown = `
    //         # ${data.title}
            
    //         ${license}

    //         Explore the [Project Page](https://github.com/${data.username}/${data.projectName})
            
    //         ## Table of Contents
    //         * [Description](#Description)
    //         * [Installation](#Installation)
    //         * [Usage](#Usage)
    //         * [Contributing](#Contributing)
    //         * [Tests](#Tests)
    //         * [License](#License)
    //         * [Questions](#Questions)

    //         ## Description: 
    //         ${data.describe} 
            
    //         ## Installation:
    //         ${data.install}

    //         ## Usage:
    //         ${data.usage}

    //         ## Contributing:
    //         ${data.contribute}

    //         ## Tests:
    //         ${data.testing}

    //         ## License:
    //         This project is covered under the following license: ${license}

    //         ## Questions:
    //         [GitHub Profile](https://github.com/${data.username})
            
    //         If you have any questions, please reach out to me via email at 
    //         * <${data.email}>
            
    //         `
    const markdown = generateMarkdown(data)
    return fs.writeFileSync(fileName, markdown)
};

// function to initialize program
const init = () => {
    inquirer
        .prompt(questions).then(data => {
            writeToFile('GeneratedREADme.md', data)
        });
}

// function call to initialize program
init();
