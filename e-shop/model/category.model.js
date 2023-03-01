import pool from '../db/dbConfig.js';
export default class Category{
    constructor(id, categoryName){
        this.id = id;
        this.categoryName = categoryName;
    }

    save(){
        return new Promise((resolve,reject)=>{
           pool.getConnection((err,con)=>{
              if(!err){
                let sql = "insert into category(categoryName) values(?)";
                con.query(sql,[this.categoryName],(err,result)=>{
                    err ? reject(err) : resolve(result);
                    con.release();
                })
              }
              else
                reject(err);
           });
        });
    }
    
    static fetch(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                  let sql = "select * from category";
                  con.query(sql,(err,result)=>{
                     err ? reject(err) : resolve(result);
                     con.release(); 
                  });
                }
                else
                  reject(err);
            })
        });
    }

    static delete(id){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                   let sql = "delete from category where id = ?";
                   con.query(sql,[id],(err,result)=>{
                     err ? reject(err) : resolve(result);
                     con.release();
                   })
                }
                else
                  reject(err);
            })
        });
    }
    static isExist(categoryName){
      return new Promise((resolve,reject)=>{
        pool.getConnection((err,con)=>{
            if(!err){
                let sql = "select * from category where categoryName = ?";
                con.query(sql,[categoryName],(err,result)=>{
                    err ? reject(err) : resolve(result);
                    con.release();
                })
            }
        })  
      });
    }

    static findById(id){
       return new Promise((resolve,reject)=>{
          pool.getConnection((err,con)=>{
            if(!err){
               let sql = "select * from category where id = ?";
               con.query(sql,[id],(err,result)=>{
                  err ? reject(err) : resolve(result);
                  con.release();
               });
            }
            else
              reject(err);
          })       
       });
    }
    update(){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,con)=>{
                if(!err){
                  let sql = "update category set categoryName = ? where id = ?";
                  con.query(sql,[this.categoryName, this.id],(err,result)=>{
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
