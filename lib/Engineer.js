const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee {
    getGithub() {
      return this.github
    }
    static role = "engineer"
    static properties = [...Employee.properties, "github"]
}


module.exports = Engineer
