import express from 'express'
import User from '../../models/users.js'

const createUser = async (req, res, next) => {
    try{
        const user = await User.create(req.body)
        return res.json({ user: user })
    }
    catch (error){
        console.log(`Ocurrió un error al crear el usuario: ${error.message}`)
        next(error)
    }
}

export default createUser