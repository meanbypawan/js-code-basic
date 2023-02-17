// prototype
function Addition(a,b){
    this.a = a;
    this.b = b;
    this.add = function(){
        console.log("Addition : "+(this.a + this.b));
    }
}

let obj = new Addition(20,10);

Addition.prototype.wish = function(){
    console.log("Hello......");
}

obj.add();
obj.wish();