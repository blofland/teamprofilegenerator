const Employee = require('./Employee');

class Manager extends Employee {
    constructor(props){
        super(props)
        this.officeNumber = props.officeNumber
    }
    getOfficeNumber() {
      return this.officeNumber
    }
}
