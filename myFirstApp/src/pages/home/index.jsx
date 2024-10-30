import { Link } from "react-router-dom";
import reactLogo from "../../assets/react.svg";



const HomePage = () => {
  return (
    <div id="home">
      <h1>Home</h1>
      <img src="/vite.svg"/>
      <img src={reactLogo}/>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
};

export default HomePage;
