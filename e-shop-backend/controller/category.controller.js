import {Category, Product} from "../model/association.js";
import { validationResult } from "express-validator";
export const save = async (request,response,next) => {
  console.log(request.body);  
  try{  
    const errors = await validationResult(request);
    if(!errors.isEmpty())
      return response.status(400).json({error: "Bad request", status: false});
   
    const category = await Category.create(request.body)
    return response.status(200).json({message: "Category saved..", status: true});
  }
  catch(err){
    console.log(err);
    return response.status(500).json({error: "Internal Server Error", status: false});
  }
}

export const list = async (request,response,next) => {
 try{ 
  let categoires = await Category.findAll();
  return response.status(200).json({categories: categoires, status: true});
 }
 catch(err){
    return response.status(500).json({error: "Internal server error", status: false});
 } 
}

export const remove = (request,response,next) => {
  Category.destroy({
    where:{id: request.body.categoryId}
  }).then(result=>{
    return response.status(200).json({message: "Category removed", status: true});
  }).catch(err=>{
    return response.status(500).json({error: "Internal Server Error", status: false});
  })
}

export const update = async(request,response,next) => {
 try{   
    const category = await Category.findByPk(request.body.id,{raw: true});
    if(!category)
     return response.status(404).json({error: "Requested resource not found.",status: false});
    
    const status =await Category.update({categoryName: request.body.categoryName},{
        where:{id: request.body.id}
    });
    return response.status(200).json({message: "category updated", category: {...category,categoryName: request.body.categoryName}, status: true});
 }
 catch(err){
    return response.status(500).json({error: "Internal Server Error", status: false});
 } 
}

export const saveAll = async (request, response, next) => {
    try {
        for (let category of request.body.categories) {
            await Category.create({ categoryName: category })
        }
        return response.status(200).json({ message: "Categories saved" });
    }
    catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal Server Error" });
    }
}

export const categoryWithProducts = (request, response,next)=>{
 Category.findAll({
    include: {model: Product, attributes:{exclude:["createdAt","updatedAt"]}}
})
 .then(result=>{
    return response.status(200).json({categories: result, status: true});
 }).catch(err=>{
    return response.status(500).json({error: "Internal server error", status: false});
 })   
}