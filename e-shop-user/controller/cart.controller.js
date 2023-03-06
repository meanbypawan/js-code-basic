import Cart from "../model/cart.model.js";

export const addToCart = (request,response,next)=>{
    let userId = request.params.userId*1 - 1543;
    let productId = request.params.productId*1 - 2567;
    
    let cart = new Cart();
    cart.userId = userId;
    cart.productId = productId;

    cart.isProductExist()
    .then(result=>{
        console.log(result);
        if(!result.length){
            cart.save()
            .then(result=>{
                return response.json({message: "Product added in cart succesfully"});
            });
        }
        else
          return response.json({message: "Product is already added in cart"});
    })
    .catch(err=> console.log(err)); 
}