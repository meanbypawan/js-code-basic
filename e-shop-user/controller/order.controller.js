import OrderItems from "../model/order-item.mode.js";
import OrderDetails from "../model/order.model.js";
export const save = (request,response,next)=>{
  let cartItems = JSON.parse(request.body.cartItems);
  console.log(request.body);
  let totalBillAmount = cartItems.reduce((previous,current)=>{
    return previous + current.price * current.qty;
  },0);
  const {contactPerson, contactNumber, deliveryAddress} = request.body;
  let date = new Date().toString().substring(4,15).replaceAll(' ','-');
  let userId = request.session.user.id;
  let paymentMode = "COD";
  let orderId = Date.now();
  let order = new OrderDetails(orderId,userId,date,totalBillAmount,contactPerson,contactNumber,deliveryAddress,"Received","COD");
  order.save()
  .then(result=>{
     OrderItems.save(cartItems,orderId)
     .then(result=>{
        // Remove all item form cart of this current user
        // Then fetch all order of this current user
        // Then render order-history page
        return response.render("order-history.ejs",{
         currentUser: request.session.user
       });
     }).catch(err=>{
        console.log(err);
     });    
  })
  .catch();
}