import http from "http";
import path from "path";
import url,{ fileURLToPath } from 'url';
import fs from "fs";
http.createServer((request,response)=>{
  
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const parsedUrl = url.parse(request.url,true);
  
  console.log(parsedUrl.pathname);

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
    response.writeHead(200,{'Content-Type':'text/html'});
    let contactPath = path.join(__dirname,"views/contact.html");
    let data = fs.readFileSync(contactPath,"utf-8");
    response.write(data);
    response.end();  
  }
  else if(parsedUrl.pathname.match("\.css") ){
    response.writeHead(200,{'Content-Type':'text/css'});
    let cssPath = path.join(__dirname,'views/'+parsedUrl.pathname);
    let readStream = fs.createReadStream(cssPath);
    readStream.pipe(response);
  }
  else if(parsedUrl.pathname.match("\.jpeg")){
    response.writeHead(200,{'Content-Type':'image/*'});
    let imagePath = path.join(__dirname,'views/'+parsedUrl.pathname);
    let readStream = fs.createReadStream(imagePath);
    readStream.pipe(response);
  
  }
}).listen(3000,()=>{
    console.log("Server started...");
})