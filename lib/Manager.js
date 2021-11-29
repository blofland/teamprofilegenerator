const Employee = require('./Employee');

class Manager extends Employee {
    getOfficeNumber() {
      return this.officeNumber
    }
    static role="manager"
}
Manager.addProps("officeNumber")

module.exports = Manager
