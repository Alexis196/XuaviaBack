import express from 'express'
import newService from '../controller/services/newService.js'
import deleteService from '../controller/services/deleteService.js'
import updateService from '../controller/services/updateServices.js'
import isMascoter from '../middleware/mascoter/isMascoter.js'
import getAllServices from '../controller/services/getAllServices.js'
import getOneServer from '../controller/services/getOneService.js'

const router = express.Router()

router.get('/', getAllServices)
router.get('/:id', getOneServer)

router.post('/addservices', isMascoter, newService)
router.post('/deleteservices/:id', deleteService)

router.put('/updateservices/:id', updateService)


export default router