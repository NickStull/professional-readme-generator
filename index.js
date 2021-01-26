const inquirer = require('inquirer');
const generateMarkdown = require('generateMarkdown');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'GitHub username:',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Your email address:',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Name of your project:',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Short description of your project:',
            name: 'description',
        },
        {
            type: 'list',
            message: 'Choose a license ("none" if not applicable):',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD', 'None'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'Command(s) to install dependencies:',
            default: 'npm i',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Command to run tests:',
            default: 'npm test',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'Information for using the repo:',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Guidelines for contributing:',
            name: 'contributing',
        },
    ])
    .then(response =>
        {
            console.log(generateMarkdown(response));
        
        });


    