const router = require("express").Router()
const apiRoute = require('./api')
const ViewsRoute = require('./views')

router.use("/api", apiRoute)
router.use("/", ViewsRoute)




module.exports = router