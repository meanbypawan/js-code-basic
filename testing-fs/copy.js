import fs from "fs";

const readStream = fs.createReadStream("data.txt");
const writeStream = fs.createWriteStream("result.txt");
readStream.pipe(writeStream);

/*
fs.readFile("data.txt","utf8",(err,data)=>{
    if(!err){
      fs.writeFile("abc.txt",data,err=>{
         err ? console.log("Operation failed") : console.log("Data copied..");
      })
    }
    else
      console.log("Operatio failed..");
})
*/
/*
try{
   let data =  fs.readFileSync("data.txt");
   fs.writeFileSync("xyz.txt",data);
   console.log("Data copied...");
}
catch(err){
    console.log("Operation failed...");
}
*/