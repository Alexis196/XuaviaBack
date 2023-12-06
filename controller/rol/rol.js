import express from 'express'
import Rol from '../../models/Rol.js'

const getRoles = async (req, res, next) => {
    try{
        const rol = await Rol.find({})
        return res.status(200).json({
            success: true,
            rol
        })
    }
    catch (err){
        next(err)
    }
}

export default getRoles