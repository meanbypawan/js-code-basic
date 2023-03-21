import User from "../model/user.model.js"
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
export const signin = async (request, response, next) => {
    try {
        let user = await User.findOne({raw: true,
            where: {
                email: request.body.email
            }
        });
        if (user) {
            let status = await bcrypt.compare(request.body.password, user.password);
            if (status){
                let payload = {subject: user.email};
                let token = jwt.sign(payload,'fdfxvcvnreorevvvcrerer');      
                return response.status(200).json({ message: "Sign in success", token: token,status: true });
            }
            return response.status(400).json({ error: "Bad request", status: false });
        }
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error", status: false });
    }
}

export const signup = async (request, response, next) => {
    try {
        const errors = await validationResult(request);
        if (!errors.isEmpty())
            return response.status(400).json({ error: "Bad request", messages: errors.array() });
        let saltKey = await bcrypt.genSalt(10);
        let encryptedPassword = await bcrypt.hash(request.body.password, saltKey);
        request.body.password = encryptedPassword;
        let user = await User.create(request.body);
        return response.status(200).json({ user: user, status: true });
    }
    catch (err) {
        return response.status(500).json({ error: "Internal Server Error", status: false });
    }
}