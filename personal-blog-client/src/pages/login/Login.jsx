import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import "./login.css";

export default function Login() {
  const navigate = useNavigate()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const res = await axios.post("http://localhost:3040/users/login",{email,password})
      if(res.data){
      console.log(res.data)
      localStorage.setItem("token",res.data.token)
        navigate("/");
      }
    } catch(err) {
    console.log(err)
    }
  }

  const handleClick = () =>{
    navigate("/register");
  }

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." onChange={(e) => setEmail(e.target.value)} value={email} />
        <label>Password</label>
        <input className="loginInput" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password..." value={password} />
        <button onClick={handleSubmit} className="loginButton">Login</button>
      </form>
        <button onClick={handleClick} className="loginRegisterButton">Register</button>
    </div>
  );
}
