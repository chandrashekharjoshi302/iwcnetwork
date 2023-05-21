
const express = require("express")

const bodyparser = require("body-parser")

const cors = require("cors")

const app = express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

app.use(cors())

const fetch = require("./routes/fetch")
app.use('/fetch',fetch)


const insert = require('./routes/insert')
app.use("/insert" , insert)

const update = require("./routes/delete")
app.use("/update",update)

const remove = require("./routes/delete")
app.use('/delete',remove)

app.listen(8080)

console.log("Server Listening port no.8080")