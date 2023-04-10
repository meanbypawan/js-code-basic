import express from "express";
import { signIn, signUp } from "../controller/user.controller.js";

import { body } from "express-validator";

const router  = express.Router();
router.post("/signup",
body("name","Name is required").notEmpty(),
body("email").isEmail(),
body("password").notEmpty(),
body("password").isLength({min: 6, max: 10}),
body("contact").notEmpty(),
body("contact").isNumeric(),
signUp);

router.post("/signin",signIn);

export default router;