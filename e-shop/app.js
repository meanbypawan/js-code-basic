import express from "express";
import {fileURLToPath} from "url";
import path from "path";

import bodyParser from "body-parser";
import session from "express-session";
import IndexRouter from "./routes/index.route.js";
import AdminRouter from './routes/admin.route.js';
import CategoryRouter from './routes/category.route.js';
import ProductRouter from './routes/product.route.js';

const app = express();

app.set("view engine","ejs");

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname,"public")));

app.use(session({secret: "xfdlfdrereorvcnvcxnvrerioerovcnmv",
saveUninitialized: true}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// http://localhost:3000/
app.use("/",IndexRouter);
// http://localhost:3000/admin/
app.use("/admin",AdminRouter);
app.use("/category",CategoryRouter);
app.use("/product",ProductRouter);
app.listen(3000,()=>{
    console.log("Server Started...");
})