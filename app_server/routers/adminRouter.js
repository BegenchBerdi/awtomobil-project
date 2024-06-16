const express=require('express');
const router=express.Router();
const adminCTRL=require('../controllers/adminCTRL')




router.get('/get-company',adminCTRL.getCompany)
router.get('/get-company/:id',adminCTRL.getCompanyId)
router.post('/add-company',adminCTRL.addCompany)
router.post('/update-company/:id',adminCTRL.updateCompany)
router.post('/delete-company/:id',adminCTRL.deleteCompany)

router.get('/get-firstdate',adminCTRL.getFirstdate)
router.get('/get-firstdate/:id',adminCTRL.getFirstdateId)
router.post('/add-firstdate',adminCTRL.addFirstdate)
router.post('/update-firstdate/:id',adminCTRL.updateFirstdate)
router.post('/delete-firstdate/:id',adminCTRL.deleteFirstdate)


router.get('/get-model',adminCTRL.getModel)
router.get('/get-model/:id',adminCTRL.getModelId)
router.post('/add-model',adminCTRL.addModel)
router.post('/update-model/:id',adminCTRL.updateModel)
router.post('/delete-model/:id',adminCTRL.deleteModel)
module.exports=router