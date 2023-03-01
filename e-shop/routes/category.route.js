import express from "express";
import { addCategoryPage, saveCategory ,save, list, remove, edit, update } from "../controller/category.controller.js";
import { verify } from "../middleware/authenticate.js";
const router = express.Router();

router.get("/add",verify,addCategoryPage);
router.post("/add",verify,save);
//router.post("/add",saveCategory);
router.get("/view",verify,list);
router.get("/delete/:id",verify,remove)
router.get("/edit/:id",verify,edit);
router.post("/edit",verify,update);
export default router;