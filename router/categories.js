import express from "express";  
import categories from "../controller/categories/categories.js";

const router = express.Router()

router.get('/', categories)


export default router