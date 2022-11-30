import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homePage/HomePage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Setting";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";
import NewPost from "./pages/newPost/NewPost";
import YourPost from "./pages/yourPost/YourPost";


function App() {
  // const currentUser = false;
  const [currentUser,setCurrentUser] = useState(false)
  useEffect(() => {
   let token =  localStorage.getItem("token")
   if(token){
    setCurrentUser(true)
   }
  },[currentUser])
  return (
    <>
        {/* <Routes>
      <Topbar />

        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
        <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route>
     
        </Routes> */}
    <Router>
<Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/posts" element={<Homepage/>} />
          <Route path="/new-post" element={<NewPost/>} />
          <Route path="/your-posts" element={<YourPost />} />
          
          <Route path="/register" element={currentUser ? <Homepage /> : <Register />}    />
          <Route path="/login"  element= {currentUser ? <Homepage /> : <Login />} />
          <Route path="/post/:id" element={<Single />}/>
          <Route path="/write" element={currentUser ? <Write /> : <Login />} />
        
          <Route path="/settings" element= {currentUser ? <Settings /> : <Login />} />
        
          
          
</Routes> 
</Router> 
    </>
  );
}

export default App;
