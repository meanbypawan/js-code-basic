import express from "express";
import { signin, signup } from "../controller/user.controller.js";
import { body } from "express-validator";

const router = express.Router();

router.post("/signin",signin);

router.post("/signup",
body("name").notEmpty(),
body("email","Not valid email id").isEmail(),
body("contact","Only digit is allowed").isNumeric(),
body("password","please enter password").notEmpty(),
body("password","password must have 5 letter at least").isLength({min: 5})
,signup);

export default router;