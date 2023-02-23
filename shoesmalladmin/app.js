import express from "express";
import {fileURLToPath} from "url";
import path from "path";

import bodyParser from "body-parser";

import IndexRouter from "./routes/index.route.js";

const app = express();

app.set("view engine","ejs");

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname,"public")));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// http://localhost:3000/
app.use("/",IndexRouter);

app.listen(3000,()=>{
    console.log("Server Started...");
})