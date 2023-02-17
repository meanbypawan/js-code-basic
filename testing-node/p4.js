console.log("At the start.......");

const eatingPizza = ()=>{
    setTimeout(()=>{
        console.log("Pizza Done.....");
    },2000);
}

const meetingWithFriends = ()=>{
   setTimeout(()=>{
    console.log("Meeting Done......");
   },1000)
}

const servicingCar = ()=>{
    setTimeout(()=>{
        console.log("Servicing Done.....");
    },5000);
}
eatingPizza();
meetingWithFriends();
servicingCar();

console.log("At the end......");