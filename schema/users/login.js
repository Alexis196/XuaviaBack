import Joi from 'joi-oid'

const registerSchema = Joi.object({
    mail: Joi.string().required(),
    password: Joi.string().required(),
})

export default registerSchema