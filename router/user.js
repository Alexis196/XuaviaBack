import express from 'express'
import getAllUsers from '../controller/user/getAllUsers.js'
import oneUser from '../controller/user/oneUser.js'
import createUser from '../controller/user/createUser.js'

const router = express.Router()

router.get('/', getAllUsers)
router.get('/:id', oneUser)

router.post('/', createUser)

export default router