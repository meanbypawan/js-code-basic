import { Cart } from "../model/cart.model.js";
export const fetchCart = async (request,response,next)=>{
    Cart.find({userId: request.params.userId})
    .populate("cartItems.productId").then(result=>{
        return response.status(200).json(result);
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error: "Internal server error"});
    })
}
export const addToCart = async (request,response,next)=>{
 try{ 
  let cart =  await Cart.findOne({userId: request.body.userId});
  if(cart){
     if(cart.cartItems.some((item)=>item.productId == request.body.productId))
       return response.status(200).json({message: "Product already added in cart", status: true});
     cart.cartItems.push({productId: request.body.productId});
     let savedCart = await cart.save();
     return response.status(200).json({message: "Product successfull added in cart", status: true});
  }
  else{
    // Cart not exists
    let savedCart = await Cart.create({
        userId: request.body.userId,
        cartItems:[{productId: request.body.productId}]
    });
    return response.status(200).json({message: "Item added successfully", status: true});
  }
 }
 catch(err){
   console.log(err); 
   return response.status(500).json({error: "Internal Server Error", status: false});
 } 
}