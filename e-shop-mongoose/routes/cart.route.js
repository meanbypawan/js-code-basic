import express from "express";
import { addToCart, fetchCart } from "../controller/cart.controller.js";
const router = express.Router();
router.post("/add-to-cart",addToCart);
router.post("/fetch-cart",fetchCart);
export default router;