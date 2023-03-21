import express from "express";
import { verifyToken } from "../middleware/tokenVerification.js";
import { saveOrder } from "../controller/order.controller.js";
const router = express.Router();

router.post("/save",verifyToken,saveOrder);

export default router;