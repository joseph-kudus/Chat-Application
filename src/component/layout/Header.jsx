import React from "react";
import "../../styles/dashboardlayout.css";
import { FaPhone } from "react-icons/fa6";
import { IoVideocamOutline } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import { useChat } from "../../context/ChatContext";
import { useUser } from "../../context/UserContext";

const Header = () => {
  const { selectedUser } = useChat();
  const { user } = useUser();

  return (
    <div className="header">
      <div className="header-nav">
        <div className="MyAcc-wraper">
          <div className="myacc">
            <div className="userimg">
              <span className="round-circle">
                <img src={selectedUser?.avatar || user?.avatar} alt="userimg" />
              </span>
            </div>
            <div className="userinfo">
              <h4>{selectedUser?.username || "Select a chat"}</h4>
              <p>{selectedUser?.online ? "Online" : "Offline"}</p>
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
