import express from 'express'
import Service from '../../models/Service.js'

const getOneServer = async (req, res, next) => {
    try{
        const service = await Service.findById(req.params.id)
        return res.status(200).json({
            success: true,
            service
        })
    }
    catch (err){
        next(err)
    }
}

export default getOneServer