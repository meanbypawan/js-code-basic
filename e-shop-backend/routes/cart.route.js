import express from "express";
import { addToCart, list, removeFromCart } from "../controller/cart.controller.js";
import { body } from "express-validator";
import { verifyToken } from "../middleware/tokenVerification.js";

const router = express.Router();

router.post("/add-to-cart",body("userId").isNumeric(),
body("productId").isNumeric(),verifyToken,addToCart);

router.get("/list/:userId",verifyToken,list);
router.post("/remove",verifyToken,removeFromCart);
export default router;