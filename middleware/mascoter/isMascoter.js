import express from 'express';
import User from '../../models/User.js';

const isMascoter = async (req, res, next) => {
    try {
        const user = await User.findOne({ _id: req.user.id, is_mascoter: true });
        if (!user) {
            return res.status(403).json({
                success: false,
                message: 'No eres un mascoter.',
            });
        }
        next();
    } catch (err) {
        console.error(`Ocurrió un error: ${err.message}`);
        next(err);
    }
};

export default isMascoter;
