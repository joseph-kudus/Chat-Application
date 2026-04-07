import React from "react";
import "../styles/dashboardlayout.css";
import { FaPhone } from "react-icons/fa6";
import { IoVideocamOutline } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";

const Header = () => {
  return (
    <div className="header">
      <div className="header-nav">
        <div className="user-profile">Grace Miller</div>
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
