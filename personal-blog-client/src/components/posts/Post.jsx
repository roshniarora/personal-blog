import { useEffect } from "react";
import Post from "../post/Post";
import "./posts.css";
import axios from "axios"
import { useState } from "react";

export default function Posts() {
const [posts , setPosts] = useState([])
  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:3040/posts-show-all")
    setPosts(res.data)
  }

  useEffect(() => {
fetchPosts()
  },[])

  return (
    <div className="posts">
     {posts?.map(ele => <Post data={ele} img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />) }
    </div>
  );
}
