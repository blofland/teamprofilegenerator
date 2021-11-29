const inquirer = require("inquirer")
const Manager = require("./Manager")
const Engineer = require("./Engineer")
const Intern = require("./Intern")

class Team {
    teammates = {
        manager: null, 
        engineers: [],
        interns: []
    }
    async createManager(){
        this.teammates.manager = await Manager.create()
    }
    async createEngineer(){
        this.teammates.engineers.push(await new Engineer.create())
    }
    async createIntern(){
        this.teammates.interns.push(await new Intern.create())
    }
    async prompt(){
        const options = ["Engineer", "Intern", "I'm finished"]
        if(!this.teammates.manager) await this.createManager()
        const response = await inquirer.prompt({
            type: "list",
            choices: options, 
            message: "What teammate would you like to create?"
        })
        console.log("----RESPONSE----", response)
        switch(response){
            case options[0]:
                await this.createEngineer()
                this.prompt()
                break;
            case options[1]:
                await this.createIntern()
                this.prompt()
                break;
            default:
                console.log("Finished!") 
                console.log(this.teammates)
                break;
        }
    }
}
console.log({
    engineer: Engineer.properties,
    manager: Manager.properties, 
    intern: Intern.properties
})
module.exports = Team