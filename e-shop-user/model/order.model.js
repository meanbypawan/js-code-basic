import pool from './dbConfig.js';
export default class OrderDetails{
    constructor(id, userId, date, billAmount, contactPerson, contactNumber, deliveryAddress,status, paymentMode){
        this.id = id;
        this.userId = userId;
        this.date = date;
        this.billAmount = billAmount;
        this.contactPerson = contactPerson;
        this.contactNumber = contactNumber;
        this.paymentMode = paymentMode;
        this.deliveryAddress = deliveryAddress;
        this.status = status;
    }

    save(){
        return new Promise((resolve,reject)=>{
           pool.getConnection((err,con)=>{
              if(!err){
                let sql = "insert into order_details(id,userId,date,billAmount,contactPerson,contactNumber,deliveryAddress,status,paymentMode) values(?,?,?,?,?,?,?,?,?)";
                con.query(sql,[this.id,this.userId, this.date,this.billAmount,this.contactPerson,this.contactNumber,this.deliveryAddress,this.status,this.paymentMode],(err,result)=>{
                    con.release();
                    err ? reject(err) : resolve(result);
                })
              }
              else
                reject(err);
           });
        });
    }
}