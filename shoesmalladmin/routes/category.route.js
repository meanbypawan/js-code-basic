import express from "express";
import { addCategoryPage, save, list, remove } from "../controller/category.controller.js";
import { verify } from "../middleware/authenticate.js";
const router = express.Router();

router.get("/add",verify,addCategoryPage);
router.post("/add",verify,save);
router.get("/view",verify,list);
router.get("/delete/:id",verify,remove)
export default router;