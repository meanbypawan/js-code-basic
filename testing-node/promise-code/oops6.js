class A{
    m1(){
        console.log("A-m1...");
    }
}
class B extends A{
   m2(){
    console.log("B-m2...");
   }
   m1(){
    console.log("B-m1...");
   }
} 

let obj = new B();
obj.m1();
obj.m2();