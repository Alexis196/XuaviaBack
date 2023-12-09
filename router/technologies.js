import express from "express";
import technologies from "../controller/technologies/technologies.js";

const router = express.Router();

router.get("/", technologies);

export default router