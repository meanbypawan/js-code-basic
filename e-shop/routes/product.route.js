import express from "express";
import { addProductPage, save, saveProduct, view, viewDescription } from "../controller/product.controller.js";
import { verify } from "../middleware/authenticate.js";
import multer from "multer";

const upload = multer({dest: "public/images/"});

const router  = express.Router();
router.get("/add",verify, addProductPage);
router.get("/view",verify,view);
router.get("/view/:productId",verify,viewDescription)
//router.post("/save", upload.single("image") ,verify, save);
//router.post("/save",saveProduct);
export default router;