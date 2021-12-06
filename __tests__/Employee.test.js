const Employee = require('../lib/Employee');

describe("Employees should have basic properties",()=>{
    const params = {name: 'Phil', id:1, email: "email@email.com"}
    const employee = new Employee(params)
    it("should have a name", ()=>{
        expect(employee.name).toBe(params.name);
    })
    it("should have an email", () => {
        expect(employee.email).toBe(params.email)
    })
    it("should have an id", () => {
        expect(employee.id).toBe(params.id)
    })
})
