import express from "express";
import {fileURLToPath} from "url";
import path from "path";

import bodyParser from "body-parser";

import pool from './db/dbConfig.js';

const app = express();
app.set("view engine","ejs");

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname,"public")));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/",(request,response,next)=>{
  return response.render('index.ejs');
});

app.get("/dashboard",(request,response,next)=>{
    return response.render("dashboard.ejs");
});

app.post("/signin",(request,response,next)=>{
  let email = request.body.email;
  let password = request.body.password;
  pool.getConnection((err,con)=>{
    if(!err){
      let sql = "select * from admin where email=? and password=?";  
      con.query(sql,[email,password],(err,result)=>{
        if(err)
          console.log(err);
        else{
          if(result.length!=0)
            return response.redirect("/dashboard");
          else
            console.log("Error...");
        }  
        con.release();
      });
    
    }
    else
     console.log(err);
  })
});

app.listen(3000,()=>{
    console.log("Server Started...");
})