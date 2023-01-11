import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="link">
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
