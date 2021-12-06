const Intern = require('../lib/Intern');

describe("interns should have basic properties",()=>{
    const params = {name: 'Phil', id:1, email: "email@email.com", school: "UofU"}
    const intern = new Intern(params)
    it("should have a name", ()=>{
        expect(intern.name).toBe(params.name);
    })
    it("should have an email", () => {
        expect(intern.email).toBe(params.email)
    })
    it("should have an id", () => {
        expect(intern.id).toBe(params.id)
    })
    it("should have an school", () => {
        expect(intern.school).toBe(params.school)
    })
})
