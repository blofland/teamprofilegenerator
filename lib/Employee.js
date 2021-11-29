const inquirer = require('inquirer');
const startCase= require("lodash/startCase")
const emailValidator = require("email-validator").validate

class Employee {
    static role = "employee"
    static properties = {
        name: {type: "input", validate: (input) =>  input.length > 3, filter: startCase},
        id: {type: "number", validate: input => !isNaN(input) || "Must be a valid number", },
        email: {type: "input", validate: input => emailValidator(input) || "Must be a valid email"}
    }
    constructor(props) {
        for(const p in props){
            if(p === "role") continue 
            if(p in this.constructor.properties) this[p] = props[p]
        }
    }
    static async create(){
        const questions = Object.keys(this.properties).map(p => {
            return {
                ...this.properties[p],
                name: p, 
                message: `What is the ${startCase(p)} for this ${this.role}?`,
            }
        })
        const answers = await inquirer.prompt(questions)
        const employee =  new this(answers)
        // for(let key in answers) employee[key] = answers[key]
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