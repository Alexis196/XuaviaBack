import express from 'express'
import newService from '../controller/services/newService.js'
import deleteService from '../controller/services/deleteService.js'
import updateService from '../controller/services/updateServices.js'
import isMascoter from '../middleware/mascoter/isMascoter.js'

const router = express.Router()

router.post('/addservices', isMascoter, newService)
router.post('/deleteservices/:id', deleteService)
router.post('/updateservices/:id', updateService)

export default router