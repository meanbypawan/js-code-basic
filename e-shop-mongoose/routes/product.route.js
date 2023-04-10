import express from "express";
import { bulkSave, list, getProduct, getProductsByCategory } from "../controller/product.controller.js";
const router = express.Router();

router.post("/bulk-save",bulkSave);
router.get("/list",list);
router.get("/:id",getProduct);
router.get("/category/:categoryName",getProductsByCategory);
export default router;
