import express from "express";
import { indexPage, signinPage, signupPage, signup, signin, signout } from "../controller/index.controller.js";
import { verify } from "../middleware/authenticate.js";
const router = express.Router();

// htto://localhost:3001/
router.get("/",indexPage);
router.get("/signin",signinPage);
router.get("/signup",signupPage);
router.post("/signup",signup);
router.post("/signin",signin);
router.get("/signout",verify,signout);
export default router;