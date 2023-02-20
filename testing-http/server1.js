import http from "http";

const server = http.createServer((request,response)=>{
   response.end("Welcome in Node.Js Server Application");
});

server.listen(3000,()=>{
    console.log("Server Started at http://localhost:3000");
});