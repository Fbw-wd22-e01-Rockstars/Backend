import express from "express";

import { getToys, createToy } from "../controllers/productsControllers.js";

let router = express.Router();

//http://localhost:5000/products/toys/

router.route("/toys").get(getToys).post(createToy);

export default router;
