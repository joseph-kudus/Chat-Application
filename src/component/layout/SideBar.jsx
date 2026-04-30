import React from "react";
import { useChat } from "../../context/ChatContext";
import { useUser } from "../../context/UserContext";
import SearchBox from "./SearchBox";
import logohead from "../../assets/Image/mingcute_chat-4-fill.png";
import { BsFillPinAngleFill, BsPinAngleFill, BsPinMapFill } from "react-icons/bs";

const SideBar = () => {
  const { allUsers, selectedUser, setSelectedUser } = useChat();
  const { user, logout } = useUser();

  return (
    <aside className="drawer">
      {/* Logo */}
      <div className="logo-wraper">
        <img src={logohead} alt="logo" />
        <span>Chatties</span>
      </div>

      <SearchBox />

      {/* Current user */}
      <div className="current-user">
        <img src={user?.avatar} alt={user?.username} />
        <div className="user-details">
          <h4>{user?.username}</h4>
          <span className="status online">Online</span>
        </div>
        <button onClick={logout} className="logout-btn">
          Logout
        </button>
      </div>

      {/* Users list */}
      <div className="users-list">
        <div className="pinus">
          <h3>
            <span>
              <BsFillPinAngleFill size={18} />
            </span>
            Pinned Chats
          </h3>
        </div>

        {allUsers.length === 0 ? (
          <p className="no-users">No other users yet</p>
        ) : (
          allUsers.map((chatUser) => (
            <div
              key={chatUser.id}
              className={`user-item ${
                selectedUser?.id === chatUser.id ? "active" : ""
              }`}
              onClick={() => setSelectedUser(chatUser)}
            >
              <img src={chatUser.avatar} alt={chatUser.username} />
              <div className="user-info">
                <h5>{chatUser.username}</h5>
                <p>{chatUser.online ? "Online" : "Offline"}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </aside>
  );
};

export default SideBar;
