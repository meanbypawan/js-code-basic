import express from "express";
import { save, history } from "../controller/order.controller.js";
import { verify } from "../middleware/authenticate.js";

const router = express.Router();
router.post("/save",verify,save);
router.get("/history",verify,history);
export default router;