import express from "express";
import { addToCart, viewCart, loadCart, remove } from "../controller/cart.controller.js";
import { verify } from "../middleware/authenticate.js";
const router = express.Router();

router.get("/add-to-cart/:userId/:productId",verify,addToCart);
router.get("/view-cart",verify,viewCart);
router.get("/load-cart",verify,loadCart);
router.get("/delete/:productId",verify,remove);
export default router;