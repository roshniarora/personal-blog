import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Post";
import Sidebar from "../../components/sidebar/sidebar";
import "./homePage.css";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
