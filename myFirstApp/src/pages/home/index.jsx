import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div id="home">
      <h1>Home</h1>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
};

export default HomePage;
