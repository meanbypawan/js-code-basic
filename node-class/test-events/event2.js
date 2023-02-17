const events = require("events");

const eventEmitter = new events.EventEmitter();

eventEmitter.on("add",()=>{
  console.log("Addition : "+(20+10));
})

eventEmitter.once("error",()=>{
    console.log("Error caught");
})
eventEmitter.emit("add");
eventEmitter.emit("add");

eventEmitter.removeAllListeners("add");

eventEmitter.emit("add");
eventEmitter.emit("error");
//eventEmitter.emit("error");