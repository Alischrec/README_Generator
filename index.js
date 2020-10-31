// inquirer
//     .prompt([
//         {
//             type: "input",
//             message: "What is your name?",
//             name: "username"
//         },
//         {
//             type: "checkbox",
//             message: "What languages do you know?",
//             name: "language",
//             choices: [
//                 'HTML',
//                 'CSS',
//                 'JavaScript',
//                 'MySQL'
//             ]
//         },
//         {
//             type: "list",
//             message: "What is your preferred method of communication? ",
//             name: "communication",
//             choices: [
//                 'email',
//                 'phone',
//                 'text',
//                 'telekenesis'
//             ]
//         }
//     ])
//     .then(function (response) {
//         response = JSON.stringify(response)
//         fs.writeFile('README.md', response + '\n', function (err) {

//             if (err) {
//                 return console.log(err);
//             }
//             console.log("Success!");
//         })
//     });


const inquirer = require("inquirer");
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
            message: "Please, enter your installation instructions.",
            name: "instructions"
        },
        {
            type: "input",
            message: "Please, enter your usage information.",
            name: "usage"
        },
        {
            type: "input",
            message: "Please, enter your project's contribution guidelines.",
            name: "guidelines"
        },
        {
            type: "input",
            message: "Please, enter your project's testing instructions.",
            name: "testing"
        },
        {
            type: "list",
            message: "Choose your license from the list below?",
            name: "license",
            choices: [
                'MIT',
                'ISC',
                'Apache',
                'GPL'
            ]
        },
    ];
inquirer
    .prompt(questions).then(data => {
        writeToFile('GeneratedREADme.md', data);
    });

// function to write README file
function writeToFile(fileName, data) {
    let markdown = `
    # ${data.title}
    ## Table of Contents

* [About the Project](#about-the-project)
  * [HTML](#html)
  * [Assets](#Assets)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#License)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

## License:
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

${data.license}


    `
    return fs.writeFileSync()
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
