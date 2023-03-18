import express from "express";
import { list, remove, save, saveAll, update, categoryWithProducts } from "../controller/category.controller.js";
import { body } from "express-validator";
const router = express.Router();
router.post("/save-all",saveAll);
router.get("/",list);
router.post("/remove", remove);
router.post("/save",body("categoryName").notEmpty(),save);
router.post("/update",body("categoryName").notEmpty(),update);
router.get("/category-with-products",categoryWithProducts);

export default router;