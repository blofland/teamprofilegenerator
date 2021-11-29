const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee {
    getGithub() {
      return this.github
    }
    static role = "engineer"
    static properties = {...Employee.properties, github: {
      type: "input",
      validate: input => {
        try{
          const url = new URL(input)
          return true 
        }catch{
          return "Must be a valid url path, be sure to include http: or https:"
        }
      }
    }}
}


module.exports = Engineer
