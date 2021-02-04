const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?'            
        },
        {
            type: 'checkbox',
            name: 'content',
            message: 'Select the sections you would like to include in your README file:',
            choices: [
                {
                    name: 'Description',
                    disabled: 'Default'
                },
                {
                    name: 'Table of Contents',
                },
                {
                    name: 'Installation',
                },
                {
                    name: 'Usage',
                },
                {
                    name: 'License',
                },
                {
                    name: 'Contributing',
                },
                {
                    name: 'Tests',
                },
                {
                    name: 'Questions',
                    disabled: 'Default'
                }
            ]
        },
        {
            type: 'input',
            name: 'description',
            message: "Type your project description:",
            // when: (answers) => answers.content.includes('Description')
        },
        {
            type: 'input',
            name: 'installation',
            message: "Type your project installation instructions:",
            when: (answers) => answers.content.includes('Installation')
        },
        {
            type: 'input',
            name: 'usage',
            message: "Type your project usage information:",
            when: (answers) => answers.content.includes('Usage')
        },
        {
            type: 'list',
            name: 'license',
            message: "Select your project license:",
            choices: ['Apache 2.0 License', 'GNU GPLv3', 'ISC', 'MIT'],
            when: (answers) => answers.content.includes('License')
        },
        {
            type: 'input',
            name: 'contributing',
            message: "Type your project contribution guidelines:",
            when: (answers) => answers.content.includes('Contributing')
        },
        {
            type: 'input',
            name: 'tests',
            message: "Type your project test instructions:",
            when: (answers) => answers.content.includes('Tests')
        },
        {
            type: 'input',
            name: 'github',
            message: "Your GitHub username:",
            // when: (answers) => answers.content.includes('Questions')
        },
        {
            type: 'input',
            name: 'email',
            message: "Your email address:",
            // when: (answers) => answers.content.includes('Questions')
        }
    ]);
};

const init = () => {
    promptUser()
    .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
    .then(() => console.log('New README file successfully generated!'))
    .catch((err) => console.log('Oops! There was an error.', err));
}

init();