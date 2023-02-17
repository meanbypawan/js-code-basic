const events = require("events");
const eventEmitter = new events.EventEmitter();

eventEmitter.on("add",(a,b)=>{
   if(typeof(a)!= "number" || typeof(b)!="number")
     return eventEmitter.emit("error",new Error("Input is not number")); 
   console.log("Addition :  "+(a+b));
})

eventEmitter.on("error",(err)=>{
  console.log(err);
})
eventEmitter.emit("add",20,"5");