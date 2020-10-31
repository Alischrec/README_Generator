// Require proper items:
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require("fs");

// Array of Questions for user:
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

// Function to write README file:
function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data)
    return fs.writeFileSync(fileName, markdown)
};

// Function to initialize program
const init = () => {
    inquirer
        .prompt(questions).then(data => {
            writeToFile('GeneratedREADme.md', data)
        });
}

// Function call to initialize program
init();
