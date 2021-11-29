const fs = require("fs")
const path = require("path")


class HtmlGenerator{
    static getTemplate = new Promise((res, rej)=>{
        fs.readFile(path.resolve(__dirname, "./index.html"), 'utf8',(err, data) => {
            if(err) return rej(err)
            res(data)
        })
    })
    document = (new JSON(await this.constructor.getTemplate)).window

    constructor(team){
        
    }
}

module.exports = HtmlGenerator