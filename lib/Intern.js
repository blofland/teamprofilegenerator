const Employee = require('./Employee');

class Intern extends Employee {
    getSchool() {
      return this.school
    }
    static role = "intern"
    static properties = [...Employee.properties, "school"]
}

module.exports = Intern