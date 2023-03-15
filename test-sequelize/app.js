import express from "express";
import ProductRouter from './routes/product.route.js';
import bodyParser from 'body-parser';


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/product",ProductRouter);

app.listen(3000,()=>{
    console.log("Server Started....");
})