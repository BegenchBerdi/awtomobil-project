const express = require('express')
const router = express.Router()
const apiCTRL = require ('../controllers/apiCTRL')




router.get('/get-company',apiCTRL.getCompany)
router.get('/get-company/:id',apiCTRL.getCompanyId)
router.get('/get-firstdate',apiCTRL.getFirstdate)
router.get('/get-firstdate/:id',apiCTRL.getFirstdateId)
router.get('/get-model',apiCTRL.getModel)
router.get('/get-model/:id',apiCTRL.getModelId)

module.exports = router