import "./register.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'

export default function Register() {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mobile, setMobile] = useState('')


  const handleClickLogin = () => {
    navigate("/login");
  }

  const handleRegister = async(e) => {
    e.preventDefault()
    try{
      const res = await axios.post("http://localhost:3040/users/register",{username,email,password,mobile})
      if(res.data){
      console.log(res.data)
        navigate("/login");
      }
    } catch(err) {
    console.log(err)
    }
  
  }
    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" value={username} onChange={(e)=> setUsername(e.target.value)} placeholder="Enter your username..." />
        <label>Email</label>
        <input className="registerInput" type="text" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter your email..." />
        <label>Password</label>
        <input className="registerInput" type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Enter your password..." />
        <label>Mobile</label>
        <input className="registerInput" type="text" value={mobile} onChange={(e)=> setMobile(e.target.value)} placeholder="Enter your Mobile number..." />
        <button onClick={handleRegister} className="registerButton">Register</button>
      </form>
        <button onClick={handleClickLogin} className="registerLoginButton">Login</button>
    </div>
    )
}
