import express from "express";
import { Category } from "../model/category.model.js";
const router  = express.Router();
router.post("/create",(request,response)=>{
    Category.create({
        categoryName: request.body.categoryName
    })
    .then(result=>{
        return response.status(200).json({message: "Category saved", status: true});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error", status: false});
    })
})
router.get("/list",(request,response)=>{
    Category.find()
    .then(result=>{
        return response.status(200).json({categories: result, status: true});
    }).catch(err=>{
        return response.status(500).json({error: "Internal Server Error", status: false});
    })
})
router.post("/save", async (request,response)=>{
  try{ 
     let categories = request.body.categories;
     for(let category of categories)
       await Category.create({categoryName: category});
     return response.status(200).json({message: "Categories Saved.."});     
  }
  catch(err){
    return response.status(500).json({error: "Internal Server Error"});
  }
})
export default router;
