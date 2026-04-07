import React from "react";
import "../styles/dashboardlayout.css";
import { FaPhone } from "react-icons/fa6";
import { IoVideocamOutline } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import userpd from "../assets/Image/Ellipse 1.png";
import kudus from "../assets/Image/20250821_160921.jpg";
const Header = () => {
  return (
    <div className="header">
      <div className="header-nav">
        <div className="MyAcc-wraper">
          <div className="myacc">
            <div className="userimg">
              <span className="round-circle">
                <img src={kudus} alt="userimg" />
              </span>
            </div>
            <div className="userinfo">
              <h4>Joseph Lukudu</h4>
              <p>Online</p>
            </div>
          </div>
        </div>

        <div className="calls-tap">
          <FaPhone />
          <IoVideocamOutline />
          <HiDotsVertical />
        </div>
      </div>
    </div>
  );
};
export default Header;
