function Message(){
    this.m1 = function(){
        console.log("GM......");
    }
    this.m2 = function(){
        console.log("GE......");
    }
    this.m3 = function(){
        console.log("GN.......");
        wish();
    }
    var wish = function(){
      console.log("Good Luck...");
    }
}

let obj = new Message();
obj.m1();
obj.m2();
obj.m3();