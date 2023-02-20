import fs from "fs";

console.log("At the end....");

const writeStream = fs.createWriteStream("xyz.txt");

let data = "Node.Js is suitable for io-intensive application";

writeStream.write(data);
writeStream.end();

writeStream.on("error",(err)=>{
    console.log(err);
});

writeStream.on("finish",()=>{
    console.log("Operation success");
})

console.log("At the start...");