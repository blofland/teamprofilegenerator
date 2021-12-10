const inquirer = require("inquirer");

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

function addManager() {
    inquirer.prompt([
        {
            type: 'text',
            name: 'office number',
            message: 'What is your office number?'
        },

      
    ])
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'text',
            name: 'school',
            message: 'What school do you go to?'
        }
    ])
}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'text',
            name: 'github',
            message: 'What is your github username?'
        }
    ])
}



function addEmployee() {
    inquirer.prompt([
  {
        type: 'text',
        name: 'name',
        message: 'What is your name?'
    },
   {
        type: 'text',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'number',
        name: 'id',
        message: 'What is your ID number?'
    },
])}

function addTeam() {
    inquirer.prompt({
        type: 'list',
        name: 'role',
        message: 'Who would you like to add to your team?',
        choices: ['Engineer', 'Intern', 'Finished',]
    });

}