import express from "express";
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import UserRouter from './routes/user.route.js';
import ProductRouter from './routes/product.route.js';
import CartRouter from './routes/cart.route.js';
import CategoryRouter from './routes/category.route.js'
import cors from "cors";
const app = express();

mongoose.connect("mongodb://localhost:27017/eshop")
.then(result=>{
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(cors());
  app.use("/user",UserRouter);  
  app.use("/product",ProductRouter);
  app.use("/cart",CartRouter);  
  app.use("/category",CategoryRouter);
  app.listen(3000,()=>{
    console.log("Server Started..");
  });
})
.catch(err=>{
    console.log("Database not conncted...");
    console.log(err);
})