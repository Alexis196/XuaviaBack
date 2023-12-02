import express from 'express'
import Service from '../../models/Service.js'

const newService = async (req, res, next) => {
    try{
        const service = await Service.create(req.body)
        return res.status(200).json({
            success: true,
            service
        })
    }
    catch (err){
        next(err)
    }
}

export default newService