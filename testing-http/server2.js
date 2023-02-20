import http from "http";

http.createServer((request,response)=>{
    console.log("Type : "+request.method);
    if(request.url == '/home')
      response.write("<h1>Home Page</h1>");
    else if(request.url == '/about')
      response.write("<h1>About Page</h1>");
    else if(request.url == '/contact')
      response.write("<h1>Contact Page</h1>");
      
    response.end();  
}).listen(3000,()=>{
    console.log("Server started...")
});