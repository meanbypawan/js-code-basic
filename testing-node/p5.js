console.log("At the start.........");
const first = (val,callback)=>{
  console.log("Inside First : "+val);
  callback(val+2);
}

const second = (val,callback)=>{
   console.log("Inside Second : "+val);
   callback(val+2);
}

const third = (val)=>{
  console.log("Inside Third : "+val);
}
first(10,(updatedValue)=>{
    second(updatedValue,(secondUpdate)=>{
        third(secondUpdate);
    });
});

console.log("At the end.....");