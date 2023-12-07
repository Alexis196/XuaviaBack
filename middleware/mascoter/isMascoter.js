import mongoose from 'mongoose';
import User from '../../models/User.js';
import Rol from '../../models/Rol.js';

const isMascoter = async (req, res, next) => {
  try {
    console.log('Usuario actual:', req.user);

    const mascoterRole = await Rol.findOne({ rol: 'Mascoter' });
    console.log('mascoter:',mascoterRole)

    if (!mascoterRole) {
      return res.status(500).json({
        success: false,
        message: 'Error interno del servidor al buscar el rol Mascoter.',
      });
    }

    const user = await User.findOne({
      _id: req.user._id,
      rol: mascoterRole._id,  // Solo necesitas el ID del rol
    });

    if (!user || String(user.rol) !== String(mascoterRole._id)) {
      return res.status(403).json({
        success: false,
        message: 'Solo los mascoters pueden publicar servicios.',
      });
    }

    next();
  } catch (err) {
    console.error(`Ocurrió un error: ${err.message}`);
    next(err);
  }
};

export default isMascoter;
