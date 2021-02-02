const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

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
                }
            ]
        }
    ]);
};

// const generateREADME = (answers) =>
// `# ${answers.title}
// `
// ;

const init = () => {
    promptUser()
    .then((answers) =>
    {
        console.log(answers.content);
    })
}

init();