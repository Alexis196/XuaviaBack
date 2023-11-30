import express from 'express'
import User from '../../models/users.js'

const existUser = async (req, res, next) => {
    try{
        const user = await User.findById(req.params.id)
    
        if (!user) {
            return res.status(404).json({
                status: 404,
                message: 'No se encontró el usuario'
            })
        }
    }
    catch (error){
        console.log(error.message)
        next(error)
    }
}

export default existUser