import express from "express";
import UserRouter from './routes/user.route.js';
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/user",UserRouter);

app.listen(3000,()=>{
    console.log("Serer started....");
})