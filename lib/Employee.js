const inquirer = require('inquirer');

class Employee {
    static role = "employee"
    static properties = ["name", "email", "id"]
    static addProps = (arr) => {
        if(!Array.isArray(arr)) arr = [arr]
        this.properties = [...this.properties, ...arr]
        return this.properties
    }
    constructor(props) {
        for(const p in props){
            if(p === "role") continue 
            if(this.constructor.properties.include(p)) this[p] = props[p]
        }
    }
    static async create(){
        const questions = this.constructor.properties.map(p => {
            return {
                type: 'input',
                name: p, 
                message: `What is the ${p} for this ${this.role}?`
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