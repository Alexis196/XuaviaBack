import express from 'express';
import User from '../../schema/user.js';

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.json({ users: users });

    } catch (error) {
        console.error('Error al obtener usuarios:', error);
    }
};

export default getAllUsers;
