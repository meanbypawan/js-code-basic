import pool from "../db/dbConfig.js";

export default class Product{
    constructor(id,productName,price,stock,description,size,color,discount,type,image,categoryId){
        this.id = id;
        this.productName = productName;
        this.price = price;
        this.stock = stock;
        this.description = description;
        this.size = size;
        this.color = color;
        this.discount = discount;
        this.type = type;
        this.image = image;
        this.categoryId = categoryId;
    }

    save(){
        return new Promise((resolve,reject)=>{
           pool.getConnection((err,con)=>{
             if(!err){
                let sql = "insert into product(productName,price,stock,description,size,color,discount,type,image,categoryId) values(?,?,?,?,?,?,?,?,?,?)";
                con.query(sql,[this.productName,this.price,this.stock,this.description,this.size,this.color,this.discount,this.type,this.image,this.categoryId],(err,result)=>{
                    err ? reject(err) : resolve(result);
                    con.release();
                }); 
             }
             else
               reject(err);
           });           
        });
    }
}