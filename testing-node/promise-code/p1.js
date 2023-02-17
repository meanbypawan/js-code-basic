let p = new Promise((resolve,reject)=>{
     //resolve();
     reject();
});

p.then(()=>{
    console.log("Promise is resolved|fullfilled..");
})
