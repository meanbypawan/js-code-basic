import { Component } from "react";

class Registration extends Component{
  registerUser = ()=>{
    let username = this.username.value;
    let email = this.email.value;
    let password = this.password.value;

    console.log(username);
    console.log(email);
    console.log(password);
    /* 
     let username = document.getElementById("username").value;
     let email = document.getElementById("email").value;
     let password = document.getElementById("password").value;

     console.log(username);
     console.log(email);
     console.log(password);
    */
  }
  render(){
    return <div>
        <h1>Registration Form..</h1>
        <div className="form-group">
            <label>Username</label>
            <input ref={(usernameObject)=>this.username=usernameObject} type="text" id="username" className="form-control"/>
        </div>
        <div className="form-group">
            <label>Email</label>
            <input ref={(emailObject)=>this.email = emailObject} type="email" id="email" className="form-control"/>
        </div>
        <div className="form-group">
            <label>Password</label>
            <input ref={(passwordObject)=>this.password = passwordObject} type="password" id="password" className="form-control"/>
        </div>
        <div className="form-group">
           <button onClick={this.registerUser} className="btn btn-primary">Register</button>
        </div>
    </div>
  }
}

export default Registration;