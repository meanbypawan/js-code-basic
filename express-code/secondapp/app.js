import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

app.set("view engine","ejs");

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const publicPath = path.join(__dirname,'public');

app.use(express.static(publicPath));

app.get("/",(request,response,next)=>{
    return response.render("index.ejs");
});
app.listen(3000,()=>{
    console.log("Server Started....");
})