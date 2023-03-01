import express from "express";
import {indexPage, signIn} from '../controller/index.controller.js'
const router = express.Router();

router.get("/",indexPage);

router.post("/signin",signIn);

export default router;