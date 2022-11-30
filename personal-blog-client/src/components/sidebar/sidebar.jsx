import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { useNavigate,useLocation } from "react-router-dom";

import "./sidebar.css";

export default function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation();
 
const handleNewPost = () =>{
  currentUser ? navigate("/new-post") : navigate("/login");
}
const [currentUser,setCurrentUser] = useState(false)
useEffect(() => {
 let token =  localStorage.getItem("token")
 if(token){
  setCurrentUser(true)
 }
},[currentUser])

const handleLogout = () =>{
  localStorage.removeItem('token')
  navigate("/login")
}
  return (
    <div className="sidebar">
      <div className="sidebarItem">
      {(currentUser && location.pathname === "/") && <span onClick={() => navigate("/your-posts") } className="sidebarTitle" style={{cursor:'pointer'}}>Your Post</span>}
      {location.pathname === "/your-posts" &&  <span onClick={() => navigate("/") } className="sidebarTitle" style={{cursor:'pointer'}}>Home</span> }
        <span onClick={handleNewPost} className="sidebarTitle" style={{cursor:'pointer'}}>Create New Post</span>

      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
      <div style={{marginTop:'2rem'}}>
      <button className="button-3" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
