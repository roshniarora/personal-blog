import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./post.css";

export default function Post({img,data,loggedIn,deletePost}) {
  const navigate = useNavigate()

  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            {data.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        {data.description}
      </p>

      <div style={{display:"flex", width:'100%', justifyContent:'space-between'}}>
      { loggedIn && <button className="button-3" onClick={() => navigate('/new-post',{state:{post:data}})} role="button">Edit</button>}
      
      { loggedIn && <button className="button-3" style={{backgroundColor :"red" }} onClick={() => deletePost(data._id)} >Delete</button>}

      </div>
    </div>
  );
}
