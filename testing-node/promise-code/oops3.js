class Message{
    m1(){
        console.log("m1-called....");
    }
    m2(){
        console.log("m2 called....");
    }
    static wishinMessage(){
        console.log("Good luck....");
    }
}

let obj = new Message();
obj.m1();
obj.m2();
Message.wishinMessage();