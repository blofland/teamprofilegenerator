const Employee = require('./Employee');

class Manager extends Employee {
    getOfficeNumber() {
      return this.officeNumber
    }
    static role="manager"
    static properties = [...Employee.properties, "office number"]
}
module.exports = Manager
