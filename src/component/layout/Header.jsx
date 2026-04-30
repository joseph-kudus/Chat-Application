import React from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import "../../styles/dashboardlayout.css";
import { FaPhone } from "react-icons/fa6";
import { IoVideocamOutline } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";

const Header = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  // This guard prevents the crash
  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="header">
      <div className="header-nav">
        <div className="MyAcc-wraper">
          <div className="myacc">
            <div className="userimg">
              <span className="round-circle">
                <img src={user.avatar} alt={user.username} />
              </span>
            </div>
            <div className="userinfo">
              <h4>{user.username}</h4>
              <p>{user.online ? "Online" : "Offline"}</p>
            </div>
          </div>
        </div>

        <div className="calls-tap">
          <FaPhone />
          <IoVideocamOutline />
          <HiDotsVertical onClick={handleLogout} title="Logout" />
        </div>
      </div>
    </div>
  );
};

export default Header;
