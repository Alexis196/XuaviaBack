import express from 'express'
import controller from '../controller/auth/auth.js'
import getAllUsers from '../controller/user/getAllUsers.js'
import oneUser from '../controller/user/oneUser.js'
import registerSchema from '../schema/users/register.js'
import validator from '../middleware/validator.js'
import loginSchema from '../schema/users/login.js'
import accountExistsSignIn from '../middleware/accountExistsSignIn.js'
import accountExistsSignUp from '../middleware/accountExistsSignUp.js'
import passwordIsOk from '../middleware/passwordIsOk.js'
import accountHasBeenVerified from '../middleware/accountHasBeenVerified.js'
import passport from '../middleware/passport.js'

const {sign_up, sign_in, sign_out, token } = controller
const router = express.Router()

router.get('/', getAllUsers)
router.get('/:id', oneUser)


router.post('/', validator(registerSchema), 
    accountExistsSignUp, 
    sign_up)

router.post('/signin', 
  validator(loginSchema),
  accountExistsSignIn,
  accountHasBeenVerified,
  passwordIsOk,
  sign_in
)

router.post('/signout',
  passport.authenticate('jwt',{session:false}),
  sign_out)

export default router