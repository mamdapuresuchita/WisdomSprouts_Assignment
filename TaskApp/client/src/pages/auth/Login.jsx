import React, { useState } from 'react'
import {login} from "../../services/authService"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();

    const handleLogin= async()=>{
        try {
            const res= await login({email,password});
            localStorage.setItem("tokenTask",res.data.token);
            localStorage.setItem("role",res.data.user.role);
            localStorage.setItem("name", res.data.user.name);

            toast.success("Login Successfull");

          //  res.data.role == "admin"?navigate("/admindashboard"):navigate("/user/dashboard");

if (res.data.user.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/user");
    }


        } catch {
            toast.error("invalid credentials")
        }
    }


  return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: "350px" }}>
        <h3 className="text-center mb-3">TaskFlow</h3>
        <input
          className="form-control mb-2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-2"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-primary w-100" onClick={handleLogin}>
          Login
        </button>
        <p className="text-center mt-2">
          New user? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  )
}

export default Login