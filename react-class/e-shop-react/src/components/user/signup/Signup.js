import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import apiEndPoint from '../../../WebApi/api';
import './Signup.css';
function Signup(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [contact,setContact] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (event)=>{
     try{ 
      event.preventDefault();
      let response = await axios.post(apiEndPoint.USER_SIGNUP,{name,email,password,contact});
      if(response.data.status){
         navigate("/signin");
      }  
     }
     catch(err){
        if(err.response.status == 400)
           toast.error("Bad request : 400");
        else if(err.response.status == 500)
           toast.error("Server Error : 500"); 
     }
    }
    return <>
      <ToastContainer/>
      <div className="container">
        <div className="row">
            <div className="col-md-5 formStyle">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input onChange={(event)=>setName(event.target.value)} type="text" placeholder="Enter name" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input onChange={(event)=>setEmail(event.target.value)} type="email" placeholder="Enter email" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input onChange={(event)=>setPassword(event.target.value)} type="password" placeholder="Enter password" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input onChange={(event)=>setContact(event.target.value)} type="text" placeholder="Enter contact number" className="form-control"/>
                    </div>
                    <div className="form-group">
                       <button type="submit" className="buttonStyle">Sign up</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </>
}

export default Signup;