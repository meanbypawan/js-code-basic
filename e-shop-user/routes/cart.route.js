import express from "express";
import { addToCart } from "../controller/cart.controller.js";
import { verify } from "../middleware/authenticate.js";
const router = express.Router();

router.get("/add-to-cart/:userId/:productId",verify,addToCart);
export default router;