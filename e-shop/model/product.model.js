import pool from "../db/dbConfig.js";

export default class Product{
    constructor(id,title,description,price,discountPercentage,
        rating,stock,brand,category,thumbnail,imageArray){
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.rating = rating;
        this.stock = stock;
        this.brand = brand;
        this.category = category;
        this.thumbnail = thumbnail;
        this.imageArray = imageArray;
    }

    save(){
        return new Promise((resolve,reject)=>{
           pool.getConnection((err,con)=>{
             if(!err){
                let sql = "insert into product(title,description,price,discountPercentage,rating,stock,brand,category,thumbnail,imageArray) values(?,?,?,?,?,?,?,?,?,?)";
                con.query(sql,[this.title, this.description,this.price,this.discountPercentage,this.rating,this.stock,this.brand,this.category,this.thumbnail,this.imageArray],(err,result)=>{
                    err ? reject(err) : resolve(result);
                    con.release();
                }); 
             }
             else
               reject(err);
           });           
        });
    }
    static getList(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                  let sql = "select * from product";
                  con.query(sql,(err,result)=>{
                    err ? reject(err) : resolve(result);
                    con.release();
                  })
                }
                else
                  reject(err);
            });
        });
    }
    static findById(id){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                  let sql = "select * from product where id = ?";
                  con.query(sql,[id],(err,result)=>{
                    err ? reject(err) : resolve(result);
                    con.release();
                  })
                }
                else
                  reject(err);
            });
        });
    }
}