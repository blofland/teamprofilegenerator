const Employee = require('../lib/Employee');

test('create a new employee', () => {
    const employee = new Employee('Phil');

    expect(employee.name).toBe('Phil');
})