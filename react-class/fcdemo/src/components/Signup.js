import { useRef } from "react";

function Signup(){
    let username = useRef("");
    let email = useRef("");
    let password = useRef("")
    const signUp = ()=>{
      let name = username.current.value;
      let userEmail = email.current.value;
      let userPassword = password.current.value;
      console.log(name);
      console.log(userEmail);
      console.log(userPassword);
    }
    return <div>
      <div className="form-group">
        <label>Username</label>
        <input ref={username} type="text" className="form-control"/>
      </div>
      <div className="form-group">
        <label>Email</label>
        <input ref={email} type="text" className="form-control"/>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input ref={password} type="password" className="form-control"/>
      </div>
      <div className="form-group">
         <button onClick={signUp} className="btn btn-outline-success">Signup</button>
      </div>
    </div>
}

export default Signup;