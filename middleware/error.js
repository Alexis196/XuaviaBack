import createError from "http-errors"

export function errorNotFound(req, res, next) {
    next(createError(404, 'Ruta no existente'))
}