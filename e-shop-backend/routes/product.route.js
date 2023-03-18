import express from "express";
import { getProduct, getProductByName, list, saveMultiple, search } from "../controller/product.controller.js";

const router = express.Router();

router.post("/save-all",saveMultiple);
router.get("/:id",getProduct);
router.get("/category/:categoryName",getProductByName);
router.get("/search/:keyword",search);
router.get("/",list);
export default router;