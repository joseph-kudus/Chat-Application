import React from "react";
import { Link } from "react-router";
import "../../styles/App.css";
import { BiLogOutCircle } from "react-icons/bi";

function Navbar() {
  return (
    <div className="Main-container">
      <div className="nav">
        <div>
          <BiLogOutCircle />
          <span>kuduschat</span>
        </div>

        <div className="navbar">
          <ul>
            <Link>Home</Link>
          </ul>
        </div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
export default Navbar;
