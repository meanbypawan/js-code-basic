let customer = {
    id: 100,
    cname: "ABC",
    age: 24,
    bal: 50000,
    withdrawal: function(amount){
       if(amount > this.bal)
         console.log("Insufficient Balance..");
       else{
          this.bal -= amount;
          console.log("Withdrawal success");
       }  
    },
    deposite: function(amount){
        this.bal += amount;
        console.log("Total Balance : "+this.bal);
    },
    balanceEnquiry: function(){
       console.log("Current Balance : "+this.bal);
    }
}

customer.withdrawal(5000);
customer.balanceEnquiry();
customer.deposite(10000);
customer.balanceEnquiry();
