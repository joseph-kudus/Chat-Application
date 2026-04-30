import React from "react";
import "../../styles/dashboardlayout.css";
import { FaPhone } from "react-icons/fa6";
import { IoVideocamOutline } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import { useChat } from "../../context/ChatContext";
import { useUser } from "../../context/UserContext";
import defaultAvatar from "../../assets/Image/Joseph.jpg"; 


const Header = () => {
  const { selectedUser } = useChat();
  const { user } = useUser();

  const avatarSrc = selectedUser?.avatar || user?.avatar || defaultAvatar;

  return (
    <div className="header">
      <div className="header-nav">
        <div className="MyAcc-wraper">
          <div className="myacc">
            <div className="userimg">
              <span className="round-circle">
                <img src={avatarSrc} alt="userimg" />
              </span>
            </div>
            <div className="userinfo">
              <h4>{selectedUser?.username || "Select a chat"}</h4>
              <p>
                {selectedUser
                  ? selectedUser.online
                    ? "Online"
                    : "Offline"
                  : ""}
              </p>
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
