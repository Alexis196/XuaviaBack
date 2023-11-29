import Joi from 'joi-oid'

const registerSchema = Joi.object({
    name: Joi
        .string()
        .min(3)
        .required()
        .messages({
            'any.required': 'El nombre es requerido',
            'string.min': ('El nombre debe tener al menos 3 caracteres'),
        }),
    mail: Joi
        .string()
        .email()
        .required(),
    password: Joi
        .string()
        .min(8)
        .max(50)
        .required()
        .messages({
            'any.required': 'La contraseña es requerida',
            'string.min': ('la contraseña debe tener al menos 8 caracteres'),
        }),
    confirm_password: Joi
        .string()
        .min(8)
        .max(50)
        .required()
        .messages({
            'any.required': 'La contraseña es requerida',
            'string.min': ('la contraseña debe tener al menos 8 caracteres'),
        })
})

export default registerSchema