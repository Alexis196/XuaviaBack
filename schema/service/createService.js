import Joi from 'joi-oid'

const serviceSchema = Joi.object({
    name: Joi
        .string()
        .required()
        .messages({
            'any.required': 'El nombre es requerido',
            'string.empty': 'El nombre no puede estar vacío',
        }),
    detail: Joi
        .string()
        .required()
        .messages({
            'any.required': 'El detalle es requerido',
            'string.empty': 'El detalle no puede estar vacío',
        }),
    price: Joi
        .number()
        .required()
        .messages({
            'any.required': 'El precio es requerido',
            'number.empty': 'El precio no puede estar vacío',
        }),
    category: Joi
        .required()
        .messages({
            'any.required': 'La categoria es requerida',
        })
})