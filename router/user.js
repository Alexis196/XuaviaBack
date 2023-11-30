import express from 'express'
import getAllUsers from '../controller/user/getAllUsers.js'
import oneUser from '../controller/user/oneUser.js'
import createUser from '../controller/user/createUser.js'
import registerSchema from '../schema/users/register.js'
import validator from '../middleware/validator.js'


const router = express.Router()

router.get('/', getAllUsers)
router.get('/:id', oneUser)


router.post('/', validator(registerSchema), createUser)
// router.post('/login', validator(loginSchema), loginUser)

export default router