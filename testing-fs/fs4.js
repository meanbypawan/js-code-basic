import fs from "fs";
console.log("At the start.....");
try{
  let data = fs.readFileSync("data1.txt","utf8");
  console.log(data);
}
catch(err){
    console.log(err.constructor.name);
}
  console.log("At the end.....");
