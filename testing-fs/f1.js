import fs from "fs";
console.log("At the start.....");

fs.appendFile("abc.txt","\nNode.js is javascript runtime evviornment",(err)=>{
    err ? console.log(err) : console.log("Operation success...");
});

console.log("At the end...");