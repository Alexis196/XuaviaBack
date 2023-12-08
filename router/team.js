import express from 'express'
import getTeam from '../controller/team/team.js'

const router = express.Router()

router.get('/', getTeam)

export default router