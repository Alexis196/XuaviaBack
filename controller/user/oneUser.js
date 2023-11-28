import express from 'express';
import User from '../../schema/user.js';

const oneUser = async (req, res) => {
    try{
        const user = await User.findOne({_id: req.params.id})
        res.json(user)
    } catch (error){
        console.log(error)
    }
}

export default oneUser