import express from "express";
import { bulkSave, list, getProduct, getProductsByCategory,recentProduct } from "../controller/product.controller.js";
import { verifyToken } from "../middleware/tokenVerification.js";
const router = express.Router();

router.post("/bulk-save",bulkSave);
router.get("/list",list);
router.get("/recent-product",recentProduct);
router.get("/:id",getProduct);
router.get("/category/:categoryName",getProductsByCategory);

export default router;
