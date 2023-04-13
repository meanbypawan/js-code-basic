import { useState } from "react";

function Counter(){
  const [counter,setCounter] = useState(0);  
  const changeCounter = ()=>{
    setCounter(counter+1);
  }  
  return <div>
    <label>Counter : {counter}</label> <br/>
    <button onClick={changeCounter} class="btn btn-success">Change Counter</button>
  </div>
}

export default Counter;