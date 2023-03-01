import express from "express";
import { dashboard, signout } from "../controller/admin.controller.js";
import { verify } from "../middleware/authenticate.js";
const router = express.Router();


// http://localhost:3000/admin/dashboard
router.get("/dashboard",verify,dashboard);
router.post("/signout",verify,signout);
export default router;