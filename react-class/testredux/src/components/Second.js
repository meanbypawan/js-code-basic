import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeValue } from "../redux-config/MasterSlice";

function Second(){
    const {value} = useSelector(state=>state.data);
    const {headOfficeAddress} = useSelector(state=>state.address);
    const dispatch = useDispatch();
    let name = useRef("");
    const changeName = ()=>{
       dispatch(changeValue(name.current.value));
    }  
    return <>
      <h1>It is second component : {value} {headOfficeAddress}</h1>
      <br/>
      <input ref={name}  type="text" /> <button onClick={changeName}>Update</button>
    </>
}

export default Second;