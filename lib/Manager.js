const Employee = require('./Employee');

class Manager extends Employee {
    getOfficeNumber() {
      return this.officeNumber
    }
    static role="manager"
    static properties = {...Employee.properties, 
      officeNumber: {
        type: "input",
        validate: input => {
          input = input.replace(/\D/g, "")
          return input.length === 10 || "Phone number should be 10 digits long"
        },
        filter: input => input.replace(/\D/g, ""),
        transformer: input => {
          input = input.replace(/\D/g, "")
          return `(${input.slice(0,3)}) ${input.slice(3,6)}-${input.slice(6, 10)}`
        }
      }
    }
}
module.exports = Manager
