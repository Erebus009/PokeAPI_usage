const express = require("express")
const path = require("path")
const logger = require("morgan")
const PORT = process.env.PORT || 3000
const routes = require("./controllers")

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes)




app.listen(PORT, () => {
    console.log("Listening at http://localhost:3000")
})