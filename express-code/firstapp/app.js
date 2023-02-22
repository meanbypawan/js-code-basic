
import express from "express";

const app = express();


app.get("/",(request,response)=>{
 return response.end("<h1>Index Page</h1>");
});

app.get("/home",(request,response)=>{
   return response.end("<h1>Home Page</h1>");
});
app.get("/about",(request,response)=>{
   return response.end("<h1>About Page</h1>");
});
app.get("/contact",(request,response,next)=>{
   return response.end("<h1>Contact Page</h1>");
});

app.get("/ab*",(request,response,next)=>{
    return response.end(request.url+" is handeld...");
});

app.use((request,response,next)=>{
   return response.end("Requested Resouce is not available");
});

app.listen(3000,()=>{
    console.log("Server Started..");
})