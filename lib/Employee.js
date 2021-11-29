const inquirer = require('inquirer');

class Employee {
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
    async ask(){
        const questions = this.constructor.properties.map(p => {
            return {
                type: 'input',
                name: p, 
                message: `What is the ${p} for this ${this.role}?`
            }
        })
        const answers = await inquirer.prompt(questions)
        for(let key in answers) this[key] = answers[key]
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