import express from 'express'
import Service from '../../models/Service.js'

const getAllServices = async (req, res, next) => {
    try{
        const services = await Service.find({})
        return res.status(200).json({
            success: true,
            services
        })
    }
    catch (err){
        next(err)
    }
}

export default getAllServices