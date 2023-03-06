import pool from "./dbConfig.js";
export default class Cart{
    constructor(id, userId, productId){
        this.id = id;
        this.userId = userId;
        this.productId = productId;
    }

    save(){
        return new Promise((resolve,reject)=>{
           pool.getConnection((err,con)=>{
              if(!err){
                let sql = "insert into cart(userId, productId) values(?,?)";
                con.query(sql,[this.userId, this.productId],(err,result)=>{
                    err ? reject(err) : resolve(result);
                    con.release();
                })
              }
              else
                reject(err);
           })
        });
    }
    
    isProductExist(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
               if(!err){
                 let sql = "select * from cart where userId = ? and productId = ?";
                 con.query(sql,[this.userId, this.productId],(err,result)=>{
                     err ? reject(err) : resolve(result);
                     con.release();
                 })
               }
               else
                 reject(err);
            })
         });
    }
}