const express = require("express")
const app = express()
const port = 50000 // modify this if necessary

var fs = require("fs");
var content = fs.readFileSync("./students.json");
var jsonfile = JSON.parse(content);

app.listen(port)
console.log(`listening port: ${port}`)

app.use(express.static(__dirname + "/public"))

app.get("/ajax_list", function(req, res) {
  content = JSON.stringify(jsonfile).replace(/(,|{|})/g, "<br/>").replace(/"/g, "").replace(/:/g, " : ")
  res.send(`${content}`)
})

app.get("/ajax_search", function(req, res) {
  id = req.query.id
  res.send(`Hello, ${jsonfile[id]}`)
})
