const inquirer = require('inquirer');

class Employee {
    constructor({name, email, id}) {
        this.name = name;
        this.email = email;
        this.id = id;

    }
    role = "employee"
    getRole() {
        return this.role
    }
    getName() {
        return this.name
        }
    getId() {
        return this.id
    }   
    getEmail() {
        return this.email
    } 

}


module.exports = Employee;