import express from "express";
import { addToCart, list } from "../controller/cart.controller.js";

const router = express.Router();
router.post("/add-to-cart",addToCart);
router.get("/list/:userId",list);
export default router;