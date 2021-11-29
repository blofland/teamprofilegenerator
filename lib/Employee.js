const inquirer = require('inquirer');
const startCase= require("lodash/startCase")
const emailValidator = require("email-validator").validate

class Employee {
    static role = "employee"
    static properties = {
        name: {type: "input", validate: (input) =>  input.length > 3, filter: startCase},
        id: {type: "number"},
        email: {type: "input", validate: emailValidator}
    }
    constructor(props) {
        for(const p in props){
            if(p === "role") continue 
            if(this.constructor.properties.include(p)) this[p] = props[p]
        }
    }
    static async create(validation){
        const questions = this.properties.map(p => {
            return {
                type: 'input',
                name: p, 
                message: `What is the ${p} for this ${this.role}?`,
                validate: input => {
                    input.length > 0
                }
            }
        })
        const answers = await inquirer.prompt(questions)
        const employee =  new this()
        for(let key in answers) employee[key] = answers[key]
        return employee
    }
    getRole() {
        return this.constructor.role
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