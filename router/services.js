import express from 'express'
import createNewService from '../controller/services/createNewService.js'
import deleteService from '../controller/services/deleteService.js'
import updateService from '../controller/services/updateServices.js'
import isMascoter from '../middleware/mascoter/isMascoter.js'
import getAllServices from '../controller/services/getAllServices.js'
import getOneServer from '../controller/services/getOneService.js'
import passport from '../middleware/passport.js';

const router = express.Router()

router.get('/', getAllServices)
router.get('/:id', getOneServer)

router.post('/addservices', passport.authenticate('jwt', { session: false }), isMascoter, createNewService)
router.post('/deleteservices/:id', deleteService)

router.put('/updateservices/:id', updateService)


export default router