const Manager = require('../lib/Manager');

describe("mangers should have basic properties",()=>{
    const params = {name: 'Phil', id:1, email: "email@email.com", officeNumber: 8012345678}
    const manager = new Manager(params)
    it("should have a name", ()=>{
        expect(manager.name).toBe(params.name);
    })
    it("should have an email", () => {
        expect(manager.email).toBe(params.email)
    })
    it("should have an id", () => {
        expect(manager.id).toBe(params.id)
    })
    it("should have a office phone number", () => {
        expect(manager.officeNumber).toBe(params.officeNumber)
    })
})
