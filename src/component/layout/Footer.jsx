import React, { useState } from "react";
import { CiFaceSmile } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
import { CgAttachment } from "react-icons/cg";
import { useChat } from "../../context/ChatContext";

const Footer = () => {
  const { selectedUser, sendMessage } = useChat();
  const [text, setText] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (text.trim() && selectedUser) {
      sendMessage(text);
      setText("");
    }
  };

  

  return (
    <footer className="footer">
      <form className="footer-wraper" onSubmit={handleSend}>
        <div className="message-area">
          <span>
            <CiFaceSmile />
          </span>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type message"
            className="input"
          />
        </div>
        <div className="attach-area">
          <MdKeyboardVoice className="voice" />
          <CgAttachment className="voice" />
          <button type="submit" className="sendmsg">
            <span className="mui">Send</span>
            <FaTelegramPlane className="mu" />
          </button>
        </div>
      </form>
    </footer>
  );
};

export default Footer;
