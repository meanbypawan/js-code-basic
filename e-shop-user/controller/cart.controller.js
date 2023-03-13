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
export const viewCart = (request,response,next)=>{
      let userId = request.session.user.id;
      Cart.getCartItem(userId)
      .then(result=>{
         return response.render("view-cart.ejs",{
            currentUser: request.session.user,
            cartItems: JSON.parse(JSON.stringify(result))
         })
       })
      .catch(err=>console.log(err));      
}

export const loadCart = (request,response,next)=>{
    let userId = request.session.user.id;
    Cart.getCartItem(userId)
    .then(result=>{
       return response.status(200).json(result);
     })
    .catch(err=>console.log(err));      
}
export const remove = (request,response,next)=>{
   let productId = request.params.productId;
   let userId = request.session.user.id;
   Cart.deleteFromCart(productId, userId)
   .then(result=>{
      return response.redirect("/cart/view-cart");     
   })
   .catch(err=>{
    console.log(err);
   });     
}