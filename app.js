let express = require("express")
let bodyParser = require("body-parser")

let app = express()

let urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set("view engine", "ejs")

app.use("/public", express.static("public"))

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.post("/about", urlencodedParser, (req, res) => {
    res.render("index", {data: req.body})
})


app.get("/profile/:name", (req, res) => {
    let data = {
        age: 20,
        job: "Developer",
        friends: ["Prasanth", "Ranjith", "Selva"]
    }
    res.render("profile", {person: req.params.name, data})
})

app.listen(5000, () => {
    console.log("Running at port 5000...")
})