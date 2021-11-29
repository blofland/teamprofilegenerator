const Employee = require('./Employee');

class Intern extends Employee {
    getSchool() {
      return this.school
    }
    role = "intern"
}
Intern.addProps("school")

module.exports = Intern