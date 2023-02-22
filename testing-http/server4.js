import http from "http";
import url from "url";
http.createServer((request,response)=>{
  let parsedUrl = url.parse(request.url,true);
  
  console.log(parsedUrl);  
  
  if(parsedUrl.pathname == "/add"){
    let a = parsedUrl.query.a*1;
    let b = parsedUrl.query.b*1;
    response.end("Addition : "+(a+b));
  }
}).listen(3000,()=>{
    console.log("server starrted..");
});