const express = require("express")
const logger = require("morgan")
const PORT = process.env.PORT || 3000


const app = express()





app.listen(PORT, () => {
    console.log("Listening at http://localhost:3000")
})