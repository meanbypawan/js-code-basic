import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { fetchCart } from '../../../redux-config/CartSlice';
import { setUser } from '../../../redux-config/UserSlice';
import api from '../../../WebApi/api';
import '../signup/Signup.css';

function Signin(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = async (event)=>{
       try{ 
         event.preventDefault();
         const response = await axios.post(api.USER_SIGNIN,{email,password});
         dispatch(setUser(response.data.user));
         dispatch(fetchCart(response.data.user._id));
         navigate("/");
       }
       catch(err){
        toast.error("Oops! something went wrong");
       }
    }
    return <>
    <ToastContainer/>
      <div className="container">
        <div className="row">
            <div className="col-md-5 formStyle">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input onChange={(event)=>setEmail(event.target.value)} type="email" placeholder="Enter email" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input onChange={(event)=>setPassword(event.target.value)} type="password" placeholder="Enter password" className="form-control"/>
                    </div>
                    <div className="form-group">
                       <button type="submit" className="buttonStyle">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </>
}
export default Signin;