import { validationResult } from "express-validator"
import { User } from "../model/user.model.js";
import bcrypt from "bcryptjs";
export const signIn = async (request,response,next)=>{
  try{
    let user = await User.findOne({email: request.body.email});
    let status = user ? await bcrypt.compare(request.body.password,user.password): false;
    return status ? response.status(200).json({message: 'Signin Success', status: true, user: {...user.toObject(),password: undefined}}) :
             response.status(401).json({message: 'Unauthorized user', status: false});
  }
  catch(err){
    console.log(err);
    return response.status(500).json({error:"Internal Server Error", status: false});
  }
}
export const signUp = async (request,response,next)=>{
  try{ 
   const errors = validationResult(request);
   if(!errors.isEmpty())
     return response.status(400).json({error: "Bad request", status: false, errors: errors.array()});
   const saltKey = await bcrypt.genSalt(10); 
   request.body.password = await bcrypt.hash(request.body.password,saltKey);
   
   let user = await User.create(request.body);
   return response.status(200).json({message: "Signup success", user: user, status: true});
  }
  catch(err){
    return response.status(500).json({error: "Internal Server Error", status: false});
  }
}