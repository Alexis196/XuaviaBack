import Service from '../../models/Service.js';

const createNewService = async (req, res, next) => {
  try {
    const userId = req.user._id;

    // Añadir la URL de la imagen por defecto
    const defaultImageUrl = 'https://i.postimg.cc/d0CY3k12/logo.png';

    // Crear el servicio con la imagen por defecto
    const service = await Service.create({
      user: userId,
      name: req.body.name,
      detail: req.body.detail,
      price: req.body.price,
      category: req.body.category,
      image: defaultImageUrl,
    });

    req.newService = service;

    return res.status(200).json({
      success: true,
      service,
    });
  } catch (err) {
    console.error(`Ocurrió un error: ${err.message}`);
    next(err);
  }
};

export default createNewService;
