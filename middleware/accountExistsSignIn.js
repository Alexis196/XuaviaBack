import User from '../models/User.js'

async function accountExistsSignIn(req,res,next) {
    const user = await User.findOne({mail: req.body.mail})
    if (user) {
        req.user = {
            name: user.name,
            id: user._id,
            mail: user.mail,
            password: user.password,
            is_admin: user.is_admin,
            is_mascoter: user.is_mascoter,
            is_user: user.is_user,
            is_verified: user.is_verified
        }
    return next()
    }
    return res.status(400).json({
        success: false,
        message: '¡Credenciales incorrectas!'
        })
}

export default accountExistsSignIn