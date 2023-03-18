import {Cart, Product} from "../model/association.js"

export const addToCart = (request,response,next)=>{
   Cart.create(request.body)
   .then(result=>{
     return response.status(200).json({message: "Item saved in cart", status: true});
   }).catch(err=>{
     return response.status(500).json({error: "Internal server error", status: false});
   })    
}

export const list = (request,response,next)=>{
    Cart.findAll({
        where:{userId: request.params.userId},
        include:{model: Product, attributes:{exclude: ["createdAt","updatedAt"]}}
    }).then(result=>{
        return response.status(200).json({"item-list": result, status: true});
    }).catch(err=>{
        return response.status(500).json({error: "Internal server error", status: false});
    })
}