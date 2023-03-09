import express from "express";
import { save } from "../controller/order.controller.js";
import { verify } from "../middleware/authenticate.js";

const router = express.Router();
router.post("/save",verify,save);
export default router;