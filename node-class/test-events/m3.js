function Messages(){
    this.m1 = ()=>{
      console.log("GM.....");
    }
    this.m2 = ()=>{
        console.log("GE.....");
    }
    this.m3 = ()=>{
        console.log("GN.....");
    }
}

var obj = new Messages();
module.exports = obj; 
