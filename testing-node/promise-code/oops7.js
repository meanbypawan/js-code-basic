class Test{
    m1(){
        console.log("First m1.....");
    }
    m1(a){
        console.log("Second m1.....");
    }
}

let obj = new Test();
obj.m1(10);