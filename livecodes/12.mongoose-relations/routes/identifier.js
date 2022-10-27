import express from "express";
import {
  createIdentifier,
  getIdentifier,
} from "../controllers/identifierController.js";

const router = express.Router();

//POSt request
router.post("/create-card", createIdentifier);

//GET request
router.get("/get-card", getIdentifier);

export default router;
