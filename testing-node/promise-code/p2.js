const evenOdd = (n)=>{
   return new Promise((resolve,reject)=>{
      if(n == null)
        throw new Error("Not a number");
      if(n%2)
        reject("Given Number Is Odd");
      else
        resolve("Given Number Is Even");  
   });
}

evenOdd(20).then(resolvedValue=>{
    console.log(resolvedValue);
}).catch(rejectedValue=>{
    console.log(rejectedValue);
});
/*
evenOdd(null).then(resolvedValue=>{
    console.log(resolvedValue);
},rejectValue=>{
    console.log("Inside reject.....");
    console.log(rejectValue);
})
*/