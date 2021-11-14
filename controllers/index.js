const router = require("express").Router()
const APIroute = require('./api.js')
const ViewsRoute = require('./views')

router.use("/api", APIRoute)
router.use("/", ViewsRoute)




module.exports = router