const fs = require("fs")
const path = require("path")
const jsdom = require("jsdom");
const { startCase } = require("lodash");
const { JSDOM } = jsdom;


class HtmlGenerator{
    static getTemplate(){ 
        return new Promise((res, rej)=>{
            fs.readFile(path.resolve(__dirname, "./index.html"), 'utf8',(err, data) => {
                if(err) return rej(err)
                res(data)
            })
        })
    }
    
    findNestedNode(group){
        return function(attribute){
            return this.document.querySelector(`#${group} [data-attribute='${attribute}']`)
        }.bind(this)
    }
    constructor(team){
        this.constructor.getTemplate()
            .then(html => this.document = (new JSDOM(html)).window.document)
            .then(()=> this.updateManagerHtml(team.teammates.manager))
            .then(()=> {this.updateEngineersHtml(team.teammates.engineers)})
            .then(()=> {this.updateInternsHtml(team.teammates.interns)})
            .then(()=> this.render())
    }
    updateManagerHtml(manager){
        const mc = this.findNestedNode("manager-card")
        mc("name").textContent = manager.name
        mc("id").textContent = manager.id
        mc("email").textContent = manager.email 
        mc("phone").textContent = manager.officeNumber
    }
    updateCollection(collection, name, parent){
        const wrapper = this.document.querySelector(parent)
        collection.forEach(c => {
            const col = this.document.createElement("div")
            col.className = "col s4"
            wrapper.append(col)

            const card = this.document.createElement("div")
            card.className = "card-panel transparent z-depth-0"
            col.append(card)

            const cardBody = this.document.createElement("div")
            cardBody.className = "card-content"
            card.append(cardBody)

            const title = this.document.createElement("h5")
            title.className = "card-title"
            title.textContent = name
            cardBody.append(title)

            const ul = this.document.createElement("ul")
            cardBody.append(ul)
            for(let key in c){
                if(key === "role") continue
                const display = key === "id" ? "ID" : startCase(key)
                const li = this.document.createElement("li")
                li.textContent = `${display}: ${c[key]}`
                li.className = "truncate"
                ul.append(li)
            }
        })
    }
    updateInternsHtml(interns){
        this.updateCollection(interns, "Intern", "#intern-cards")
    }
    updateEngineersHtml(engineers){
        this.updateCollection(engineers, "Engineer", "#engineer-cards")
    }
    render(){
        return new Promise((res, rej)=>{
            fs.writeFile(path.resolve(__dirname, "./dist/output.html"), this.document.documentElement.outerHTML,(err) => {
                if(err) return rej(err)
                console.log("Successfully wrote to file")
            })
        })
    }
}

module.exports = HtmlGenerator