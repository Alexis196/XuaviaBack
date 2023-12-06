import express from 'express'
import getRoles from '../controller/rol/rol.js'

const router = express.Router()

router.get('/', getRoles)

export default router