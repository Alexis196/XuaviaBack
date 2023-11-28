import express from 'express'
import getAllUsers from '../controller/user/allUsers.js'
import oneUser from '../controller/user/oneUser.js'

const router = express.Router()

router.get('/', getAllUsers)
router.get('/:id', oneUser)

export default router