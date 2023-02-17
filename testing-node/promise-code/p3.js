const roomCleaning = ()=>{
  console.log("Room cleaning is triggered....");
  return new Promise((resolve,reject)=>{
     setTimeout(()=>{
       reject("Room not cleaned..");
     },3000);
  });
}

const removingGarbage = ()=>{
  console.log("Removing garbage is triggered....");
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Grabage Removed....");
    },4000);
  })
}

const gotAIcecream = ()=>{
   console.log("Got a icecream....");
}
Promise.all([roomCleaning(),removingGarbage()])
.then(result=>{
  console.log(result[0]);
  console.log(result[1]);
  gotAIcecream();
})
.catch(err=>{
   console.log("Ice-cream lost");
});

// roomCleaning().then(resolvedValue=>{
//     console.log(resolvedValue);
//     removingGarbage().then(resolvedValue=>{
//       console.log(resolvedValue);
//       gotAIcecream();
//     }).catch(()=>{
//         console.log("Icecream lost...");
//     })
// }).catch(()=>{
//     console.log("Icecream lost...");
// })