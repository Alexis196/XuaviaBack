import express from 'express'
import userRoute from './user.js'
import servicesRouter from './services.js'


const router = express.Router()

router.use('/users', userRoute)
router.use('/services', servicesRouter)


export default router