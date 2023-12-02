import Joi from 'joi-oid';

const registerSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .required()
        .messages({
            'any.required': 'El nombre es requerido',
            'string.min': 'El nombre debe tener al menos 3 caracteres',
        }),
    mail: Joi.string()
        .email()
        .required()
        .messages({
            'any.required': 'El correo electrónico es requerido',
            'string.email': 'Debe ser un correo electrónico válido',
        }),
    password: Joi.string()
        .min(8)
        .max(50)
        .required()
        .messages({
            'any.required': 'La contraseña es requerida',
            'string.min': 'La contraseña debe tener al menos 8 caracteres',
        }),
    rol: Joi
    .required()
    .messages({
        'any.required': 'El rol es requerido',
    })
})
.unknown(true);

export default registerSchema;
