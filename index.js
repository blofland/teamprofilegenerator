// const inquirer = require("inquirer");

// const Employee = require('./lib/Employee');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');
// const Manager = require('./lib/Manager');

// function addManager() {
//     inquirer.prompt([
//         {
//             type: 'text',
//             name: 'office number',
//             message: 'What is your office number?'
//         },

//         {
//             type: 'list',
//             name: 'role',
//             message: 'Who would you like to add to your team?',
//             choices: ['Engineer', 'Intern', 'Finished']
//         }

//     ])
// }

// function addIntern() {
//     inquirer.prompt([
//         {
//             type: 'text',
//             name: 'school',
//             message: 'What school do you go to?'
//         }
//     ])
// }

// function addEngineer() {
//     inquirer.prompt([
//         {
//             type: 'text',
//             name: 'github',
//             message: 'What is your github username?'
//         }
//     ])
// }



// function addEmployee() {
//     inquirer.prompt([
//   {
//         type: 'text',
//         name: 'name',
//         message: 'What is your name?'
//     },
//    {
//         type: 'text',
//         name: 'email',
//         message: 'What is your email?'
//     },
//     {
//         type: 'number',
//         name: 'id',
//         message: 'What is your ID number?'
//     },
// ])}

const HtmlGenerator = require("./html-generator")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const Team = require("./lib/Team")
const team = new Team()
team.teammates.manager = new Manager({name: "Nate", id: 123, email: 'email@email.com', officeNumber: '(801) 453-7756'})
team.teammates.engineers = [
    new Engineer({id: 123, name: "Mr. Sir", email: 'test_email@email.com', github: 'http://github.com/blofland'}),
    new Engineer({id: 1323, name: "Ariel", email: 'another_email@email.com', github: 'http://github.com/Naternelson'}),
    new Engineer({id: 1323, name: "Ariel", email: 'another_email@email.com', github: 'http://github.com/Naternelson'}),
    new Engineer({id: 1323, name: "Ariel", email: 'another_email@email.com', github: 'http://github.com/Naternelson'}),
    new Engineer({id: 1323, name: "Ariel", email: 'another_email@email.com', github: 'http://github.com/Naternelson'}),
    new Engineer({id: 1323, name: "Ariel", email: 'another_email@email.com', github: 'http://github.com/Naternelson'}),
    new Engineer({id: 1323, name: "Ariel", email: 'another_email@email.com', github: 'http://github.com/Naternelson'})
]

team.teammates.interns = [
    new Intern({id: 123, name: "Mr. Sir", email: 'test_email@email.com', school: 'UofU'}),
    new Intern({id: 123, name: "Mr. Sir", email: 'test_email@email.com', school: 'UofU'}),
    new Intern({id: 123, name: "Mr. Sir", email: 'test_email@email.com', school: 'UofU'}),
    new Intern({id: 123, name: "Mr. Sir", email: 'test_email@email.com', school: 'UofU'}),
    new Intern({id: 123, name: "Mr. Sir", email: 'test_email@email.com', school: 'UofU'}),
    new Intern({id: 123, name: "Mr. Sir", email: 'test_email@email.com', school: 'UofU'}),
    new Intern({id: 123, name: "Mr. Sir", email: 'test_email@email.com', school: 'UofU'}),
    new Intern({id: 123, name: "Mr. Sir", email: 'test_email@email.com', school: 'UofU'})
]

new HtmlGenerator(team)