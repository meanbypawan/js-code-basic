import pool from './dbConfig.js';
export default class OrderItems{
    constructor(id, productId,qty,orderDetailsId){
        this.id = id;
        this.productId = productId;
        this.qty = qty;
        this.orderDetailsId = orderDetailsId;
    }

    static save(cartItems,orderId){
      return new Promise((resolve,reject)=>{
         pool.getConnection((err,con)=>{
            if(!err){
               let sql = "insert into order_items(productId,qty,orderDetailsId) values(?,?,?)";
               cartItems.forEach(item=>{
                   con.query(sql,[item.id,item.qty,orderId],(err,result)=>{
                      if(err)
                        reject(err);
                   })
               });
               resolve();
            }
            else
             reject(err);
         })
      });
    }
}