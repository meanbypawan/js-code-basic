const firstName = ()=>{
  return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        resolve("Merry");
     },3000);
  });
}
const middleName = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("John");
        },2000);
    });
}
const lastName = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Alexan")
        },1000);
    });
}

Promise.race([firstName(),middleName(),lastName()])
.then(result=>{
    console.log(result);
}).catch(err=>{
  console.log(err);
})

/*
Promise.all([firstName(),middleName(),lastName()])
.then(results=>{
    console.log(results[0]+" "+results[1]+" "+results[2]);
}).catch(err=>{

})

*/