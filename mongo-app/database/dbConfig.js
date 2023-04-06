import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/productdb")
.then(result=>{
    console.log("Database Conncted....");
})
.catch(err=>{
    console.log(err);
});

export default mongoose.connection;