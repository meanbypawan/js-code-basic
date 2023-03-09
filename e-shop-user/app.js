import express from "express";
import bodyParser from "body-parser";
import {fileURLToPath} from "url";
import path from "path";
import session from "express-session";

import ProductRouter from './routes/product.route.js';
import IndexRouter from './routes/index.route.js';
import CartRouter from './routes/cart.route.js';
import OrderRouter from './routes/order.route.js';
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({secret: "fdlfdfjreiroeribmbdmfdbf"}));
app.use("/",IndexRouter);
app.use("/product",ProductRouter);
app.use("/cart",CartRouter);
app.use("/order",OrderRouter);

app.listen(3001,()=>{
   console.log("Server Started...");
});