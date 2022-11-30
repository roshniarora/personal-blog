import React, { useState , useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from '../../config/axios'
import { Link} from "react-router-dom";

import "./newpost.css";
import "../../components/post/post.css"

export default function NewPost() {
    const navigate = useNavigate()
    const location = useLocation();
const [title, setTitle] = useState(location?.state?.post?.title || '')
const [description, setDescription] = useState(location?.state?.post?.description || '')
//   const [tags, setTags] = useState("");
// console.log({location:location,state:location.state.post})
  const createNewPost = async(e) =>{
    e.preventDefault()
    try{
        if(location?.state?.post?.title){
            const res = await axios.put(`/post/${location?.state?.post?._id}`,{title,description})
            if(res.data){
            console.log(res.data)
              navigate("/your-posts");
            
        }
      }else {
        const res = await axios.post(`/post`,{title,description})
        if(res.data){
        console.log(res.data)
          navigate("/your-posts");
        
    }
    }
    } catch(err) {
    console.log(err)
    }
    // initialPosts.push(newPost);
    // history.push("/");
  }
  const [currentUser,setCurrentUser] = useState(false)
useEffect(() => {
 let token =  localStorage.getItem("token")
 if(token){
  setCurrentUser(true)
 }
},[currentUser])

  const handleNewPost = () =>{
    currentUser ? navigate("/") : navigate("/login");
  }
    return (
        <div style={{display:'flex', justifyContent:'space-between'}}>
        <div  >
    <div id="newPostWrapper" style={{marginLeft:'3rem', marginTop:'3rem'}} >
      <h2>Write a new post</h2>
      <form>
    
        <div id="titleInput">
          <label htmlFor="title">Title of post</label>
          <input
            type="text"
            id="title"
            name="title"
            value={ title}
            placeholder="Post title..."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div id="textBodyInput">
          <label htmlFor="postText">Blog post</label>
          <textarea
            id="description"
            name="description"
            value={description}
            placeholder="Write your post here..."
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        {/* <div id="tagsInput">
          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            id="tags"
            name="tags"
            placeholder="Tags..."
            onChange={(e) => setTags(e.target.value)}
          />
        </div> */}
        <button className="button-3" type="button" onClick={createNewPost}>
          Publish
        </button>
      </form>
    </div>
    </div>


      <div className="sidebar" style={{width:'100%',marginLeft:'3rem', marginTop:'3rem'}}>
      <div className="sidebarItem">
      <span onClick={handleNewPost} className="sidebarTitle" style={{cursor:'pointer'}}>Home</span>

      {currentUser && <span onClick={() => navigate("/your-posts") } className="sidebarTitle" style={{cursor:'pointer'}}>Your Post</span>}
        </div>

        <div>
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
      </div>
      </div>
     
      
     
      </div>
  );
}
