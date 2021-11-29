const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

getInfo(
    getName() {
    inquirer
    .prompt({
        type: 'text',
        name: 'name',
        message: 'What is your name?'
    })
    .then(({ name}) => {
        this.name = name;
    })
}
getEmail() {
    inquirer
    .prompt({
        type: 'text',
        name: 'email',
        message: 'What is your email?'
    })
    .then(({ email }) => {
        this.email = email;
    })
}

getId() {
    inquirer
    .prompt({
        type: 'number',
        name: 'id',
        message: 'What is your ID number?'
    })
    .then(({ id }) => {
        this.id = id;
    })
})