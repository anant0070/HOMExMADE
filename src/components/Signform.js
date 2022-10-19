import React, { useState } from 'react'
import "./Signform.css";
const Signform = () => {
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    
    const onclickhandler=(e)=>{
        if(user.length>0 && password.length>0){
            alert("Login Successfull");
            e.preventDefault();
            
        }
        
    }
  return (
    <div className="login">

    <h1 className="text-center">Login!</h1>
    
    <form className="needs-validation">
        <div className="form-group was-validated">
            <label className="form-label">Email address</label>
            <input className="form-control" type="email" onKeyUp={(e)=>{setUser(e.target.value)}} id="email" required></input>
            <div>
                Please enter your email address
            </div>
        </div>
        <div className="form-group was-validated">
            <label className="form-label">Password</label>
            <input className="form-control" type="password" onKeyUp={(e)=>{setPassword(e.target.value)}} id="password" required></input>
            <div>
                Please enter your password
            </div>
        </div>
        <div className="form-group form-check">
            <input className="form-check-input" type="checkbox" id="check"></input>
            <label className="form-check-label">Remember me</label>
        </div>
        <button onClick={onclickhandler} style={{color:"white" ,background:"red"}} className="btn  w-100" type="submit" >SIGN IN</button>
    </form>
</div>
  )
}

export default Signform