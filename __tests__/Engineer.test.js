const Engineer = require('../lib/Engineer');

describe("Engineers should have basic properties",()=>{
    const params = {name: 'Boedi', id:1, email: "email@email.com", github: "http//github.com/blofland"}
    const engineer = new Engineer(params)
    it("should have a name", ()=>{
        expect(engineer.name).toBe(params.name);
    })
    it("should have an email", () => {
        expect(engineer.email).toBe(params.email)
    })
    it("should have an id", () => {
        expect(engineer.id).toBe(params.id)
    })
    it("should have a github", ()=>{
        expect(engineer.github).toBe(params.github)
    })
})
