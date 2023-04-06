import express from "express";
import db from  './database/dbConfig.js';
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/save",(request,response)=>{
   // request.body = {} 
   db.collection("products").insertOne({
    name: request.body.name,
    price: request.body.price
   }).then(result=>{
     return response.status(200).json({status: true, message: "Product saved"});
   }).catch(err=>{
     console.log(err);
     return response.status(500).json({status: false, error: "Internal Server Error"});
   })
   
});
app.listen(3000,()=>{
    console.log("Server Started...");
})