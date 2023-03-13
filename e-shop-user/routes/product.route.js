import express from "express";
import { allProduct, productByCategory, search } from "../controller/product.controller.js";

const router = express.Router();
router.get("/all",allProduct);
router.get("/:categoryName",productByCategory);
router.get("/product-search/:keyword",search);
export default router;