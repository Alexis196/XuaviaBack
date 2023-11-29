import express from 'express';
import User from '../../models/users.js';

const oneUser = async (req, res, next) => {
    try {
        const user = await User.findById({ _id: req.params.id });

        if (!user) {
            return res.status(404).json({ status: 404, message: 'No se encontró el usuario' });
        }

        return res.json(user);
    } catch (error) {
        console.log(error);
        next(error);
    }
};

export default oneUser;
