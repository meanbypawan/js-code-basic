import { validationResult } from "express-validator";
import {Cart, Product} from "../model/association.js"
import CartItem from "../model/cart-item.model.js";
import sequelize from "../model/dbConfig.js";

export const addToCart = async (request,response,next)=>{
 const errors = validationResult(request);
 if(!errors.isEmpty())
   return response.status(400).json({error: "Bad request", errors: errors.array(), status: false});

 const transaction = await sequelize.transaction();
 try{ 
    let cart = await Cart.findOne({raw: true, where:{userId: request.body.userId}});
    if(cart){
      let cartItem = await CartItem.findOne({raw: true, where:{
        cartId: cart.id,
        productId: request.body.productId
      }});
      
      if(cartItem)
        return response.status(200).json({message:"Product is already added in cart", status: true});

      await CartItem.create({productId: request.body.productId,
        cartId: cart.id}).then(result=>{return result.dataValues});
    
      return response.status(200).json({message: "Item added in cart", status: true});
    }
    else{
      let cart = await Cart.create({userId: request.body.userId},{
        transaction
      })
      .then(result=>{return result.dataValues});

      let cartItem = await CartItem.create({productId: request.body.productId,cartId: cart.id},{transaction})
      .then(result=>{return result.dataValues});

      await transaction.commit();
      return response.status(200).json({message: "Item added in cart", status: true});      
    }
 }
 catch(err){
   await transaction.rollback();
   return response.status(500).json({error: "Internal server error", status: false});
 }
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

export const removeFromCart = async (request,response,next)=>{
  try{ 
    const cart = await Cart.findOne({raw: true, where:{userId: request.body.userId}});
    if(!cart)
      return response.status(404).json({error: "Requested resouce not found : 404", status: false});
    
    let status = await CartItem.destroy({
      where: {cartId: cart.id, productId: request.body.productId}
    });   
    
    if(status)
     return response.status(200).json({message: "Item removed from cart", status: true});
    return response.status(404).json({message: "Requested resouce not found", status: false});
  }
  catch(err){
     return response.status(500).json({error: "Internal server error", status: false});
  }
}