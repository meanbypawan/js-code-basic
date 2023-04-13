import { useState } from "react";

function EOCounter(){
    const [evenCounter, setEvenCounter] = useState(0);
    const [oddCounter, setOddCounter] = useState(1);
    const changeCounter = (val)=>{
      if(val)
        setOddCounter(oddCounter+2);
      else
        setEvenCounter(evenCounter+2);  
    }
    return <div className="row">
       <div className="col-md-6">
          <label>Even Counter : {evenCounter}</label> <br/>
          <button onClick={()=>changeCounter(0)} className="btn btn-danger">Event Counter</button>
       </div>
       <div className="col-md-6">
          <label>Odd Counter : {oddCounter}</label> <br/>
          <button onClick={()=>changeCounter(1)} className="btn btn-warning">Odd Counter</button>
       </div>
    </div>
}

export default EOCounter;