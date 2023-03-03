import express from "express";
import { indexPage } from "../controller/index.controller.js";
const router = express.Router();

// htto://localhost:3001/
router.get("/",indexPage);

export default router;