const Employee = require('./Employee');

class Intern extends Employee {
    constructor(props){
        super(props)
        this.school = props.school
    }
    getSchool() {
      return this.school
    }
    role = "intern"
}
