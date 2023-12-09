import express from 'express'
import userRoute from './user.js'
import servicesRouter from './services.js'
import categoriesRouter from './categories.js'
import rolesRouter from './roles.js'
import teamRouter from './team.js'
import technologiesRouter from './technologies.js'


const router = express.Router()

router.use('/users', userRoute)
router.use('/services', servicesRouter)
router.use('/categories', categoriesRouter)
router.use('/roles', rolesRouter)
router.use('/team', teamRouter)
router.use('/technologies', technologiesRouter)


router.use('/roles', rolesRouter)



export default router