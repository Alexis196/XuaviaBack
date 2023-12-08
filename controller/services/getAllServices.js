import express from 'express';
import Service from '../../models/Service.js';

const ITEMS_PER_PAGE = 9;

const getAllServices = async (req, res, next) => {
  try {
    const currentPage = parseInt(req.query.page) || 1;


    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;


    const services = await Service.find({})
      .skip(startIndex)
      .limit(ITEMS_PER_PAGE);

    return res.status(200).json({
      success: true,
      services,
    });
  } catch (err) {
    next(err);
  }
};

export default getAllServices;
