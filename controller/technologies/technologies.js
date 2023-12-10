import express from "express";
import Technology from "../../models/Technology.js";

const getTechnologies = async (req, res, next) => {
    try{
        const technologies = await Technology.find()
        return res.status(200).json({technologies})
    }
    catch (err){
        console.log(err)
        next(err)
    }
}

export default getTechnologies