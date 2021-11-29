const { it } = require('@jest/globals');
const { describe } = require('yargs');
const Employee = require('../lib/Employee');

describe("Employees should have basic properties",()=>{
    it("should have a name", ()=>{
        const employee = new Employee('Phil');

        expect(employee.name).toBe('Phil');
    })
})
