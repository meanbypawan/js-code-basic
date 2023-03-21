import sequelize from "../model/dbConfig.js"
import OrderItem from "../model/order-item.model.js";
import Order from "../model/order.model.js";

export const saveOrder = async (request,response,next)=>{
  let transaction = await sequelize.transaction();
  try{
    let orderDetails = request.body.order_details;
    let orderInfo = {...orderDetails};
    delete orderInfo.orderItem;
    let newOrder = await Order.create(orderInfo,{transaction}).then(result=>{return result.dataValues});
    
    let orderItemArray = await orderDetails.orderItem.map((item,index)=>{
        item.orderId = newOrder.id;
        return item;
    });
    let orderItems = await OrderItem.bulkCreate(orderItemArray,{transaction}).then(result=>{return result.dataValues}); 
    await  transaction.commit();
    return response.status(200).json({message: "Order created", status: true});
  }
  catch(err){
    console.log(err);
    await transaction.rollback();
    return response.status(500).json({error: "Internal Server Error", status: false});
  }
}