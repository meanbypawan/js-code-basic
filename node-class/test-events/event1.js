const events = require("events");

const eventEmitter = new events.EventEmitter();

eventEmitter.on("data",()=>{
    console.log("Data event caught....");
});
eventEmitter.on("finish",()=>{
    console.log("Finish event caught..");
});
eventEmitter.on("error",()=>{
    console.log("Error event caught...");
})

eventEmitter.emit("data");
eventEmitter.emit("finish");
eventEmitter.emit("error");