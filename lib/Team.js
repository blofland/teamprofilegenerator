const inquirer = require("inquirer")
const Manager = require("./Manager")
const Engineer = require("./Engineer")
const Intern = require("./Intern")
const HtmlGenerator = require("../html-generator")

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
        this.teammates.engineers.push(await Engineer.create())
    }
    async createIntern(){
        this.teammates.interns.push(await Intern.create())
    }
    async prompt(){
        const options = ["Engineer", "Intern", "I'm finished"]
        if(!this.teammates.manager) await this.createManager()
        const response = await inquirer.prompt({
            type: "list",
            choices: options, 
            name: 'response',
            message: "What kind of teammate would you like to add?"
        })
        console.log()
        switch(response.response){
            case options[0]:
                await this.createEngineer()
                break;
            case options[1]:
                await this.createIntern()
                break;
            default:
                console.log("Awesome, thanks!")
                console.log("Rendering html...")
                new HtmlGenerator(this)
                return
        }
        this.prompt()
    }
}
module.exports = Team