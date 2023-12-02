import express from 'express'
import Category from '../../models/Category.js'

const categories = async (req, res, next) => {
    try{
        const categories = await Category.find()
        return res.json(categories)
    }
    catch (err){
        console.log(err.message)
        next(err)
    }
}

export default categories