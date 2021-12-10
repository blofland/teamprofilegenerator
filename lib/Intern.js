const Employee = require('./Employee');
const startCase = require("lodash/startCase")

class Intern extends Employee {
  getSchool() {
    return this.school
  }
  static role = "intern"
  static properties = {...Employee.properties, 
    school: {
      type: "input",
      filter: startCase
    }
  }
}

module.exports = Intern