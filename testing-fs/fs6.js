import fs from "fs";

const readStream = fs.createReadStream("data.txt");

let data = "";

readStream.on("data",chunk=>{
  data = data + chunk;
});

readStream.on("error",err=>{
    console.log(err);
});

readStream.on("end",()=>{
    console.log(data);
    console.log("Operation success.....");
})