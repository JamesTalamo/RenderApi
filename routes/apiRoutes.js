const express = require('express')
const router = express.Router()
const routesControl = require('../controller/controller')

//For api routes
router.get('/', routesControl.delAll)//delete all data inside my mongodb db
router.post('/', routesControl.save)// add data in my mongodb db

router.get('/data', routesControl.getAllData) // get all data in mongodb



module.exports = router