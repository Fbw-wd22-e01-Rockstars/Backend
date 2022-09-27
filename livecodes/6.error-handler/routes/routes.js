import express from "express";
import { getOrder, createOrder } from "../controllers/orderControllers.js";

const router = express.Router();

//http://localhost:5000/orders
router.route("/").get(getOrder).post(createOrder);

export default router;
