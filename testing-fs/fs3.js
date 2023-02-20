import fs from "fs";
console.log("At the start....");
try{
  fs.writeFileSync("abc.txt","Node.Js is applocation is asynchronous by default");
  console.log("Operation success....");
}
catch(err){
    console.log(err);
}
console.log("At the end....");