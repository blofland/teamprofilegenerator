const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(props){
        super(props)
        this.github = props.github
    }
    getGithub() {
      return this.github
    }
    role = "engineer"
}

