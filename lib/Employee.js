const inquirer = require('inquirer');

class Employee {
    constructor({name, email, id}) {
        this.name = name;
        this.email = email;
        this.id = id;

    }
    getRole() {
        inquirer
        .prompt({
            type: 'list',
            name: 'role',
            message: 'What is your role in the company?',
            choices: ['Employee', 'Engineer', 'Intern', 'Manager'],
            default: this.defaultRole

        })
    }
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
    }



}

    






// name
// id
// email
// GetName()
// getId()
// getEmail()
// getRole()


module.exports = Employee;