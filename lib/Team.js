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
    async getManager(){
        const manager = new Manager()
        
    }
}