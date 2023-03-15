import express from "express";
import { list, save, getProductById, getProductByName } from "../controller/product.controller.js";

const router = express.Router();
router.post("/save",save);

router.get("/list",list);

router.get("/:productId", getProductById);
router.post("/byname",getProductByName);
export default router;