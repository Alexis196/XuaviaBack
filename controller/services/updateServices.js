import express from 'express'
import Service from '../../models/Service.js'

const updateService = async (req, res, next) => {
    try{
        const service = await Service.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        return res.status(200).json({
            success: true,
            service
        })
    }
    catch (err){
        next(err)
    }
}

export default updateService