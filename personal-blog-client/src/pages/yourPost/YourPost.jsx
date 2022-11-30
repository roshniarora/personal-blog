import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Post from "../../components/post/Post";
import Sidebar from "../../components/sidebar/sidebar";
import axios from "../../config/axios";
import "../homePage/homePage.css";
import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import "../../components/sidebar/sidebar.css";

export default function YourPost() {
  const location = useLocation();
  console.log(location);
  const [posts , setPosts] = useState([])
  const fetchPosts = async () => {
    const res = await axios.get("/posts")
    setPosts(res.data)
  }

  useEffect(() => {
fetchPosts()
  },[])

  const deletePost = async (id) => {
console.log({id})
try{
     await axios.delete(`/post/${id}`)
    fetchPosts()
}catch(err) {
    console.log(err)
}
  }

  return (
    <>
      <Header />
      
      
      <div className="home">
        {/* <Posts /> */}
{posts?.map(ele => <Post  deletePost={deletePost} loggedIn={true} data={ele} img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />)}
        <Sidebar />
      </div>
    </>
  );
}
