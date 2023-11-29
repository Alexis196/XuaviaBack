import express from 'express';
import User from '../../models/users.js';

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.json({ users: users });

    } catch (error) {
        console.error('Error al obtener usuarios:', error);
    }
};

export default getAllUsers;
