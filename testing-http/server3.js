import http from "http";
import path from "path";
import url,{ fileURLToPath } from 'url';
import fs from "fs";
http.createServer((request,response)=>{
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const parsedUrl = url.parse(request.url,true);
  if((parsedUrl.pathname == '/' || parsedUrl.pathname == '/home')  && request.method=='GET'){
    let indexPath = path.join(__dirname,"views/index.html");
    let data = fs.readFileSync(indexPath,'utf-8');
    response.write(data);
    response.end();
  }
  else if(parsedUrl.pathname == '/about' && request.method == "GET"){
    let aboutPath = path.join(__dirname,"views/about.html");
    let data = fs.readFileSync(aboutPath,"utf-8");
    response.write(data);
    response.end();  
  }
  else if(parsedUrl.pathname == '/contact' && request.method == "GET"){
    let contactPath = path.join(__dirname,"views/contact.html");
    let data = fs.readFileSync(contactPath,"utf-8");
    response.write(data);
    response.end();  
  }
  // request.url = "/add?a=20&b=10"
  else if(parsedUrl.pathname == "/add"){
    console.log("/add route hit....");
  }
}).listen(3000,()=>{
    console.log("Server started...");
})