import React from "react";
import { CiFaceSmile } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
import { CgAttachment } from "react-icons/cg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wraper">
        <div className="message-area">
          <span>
            <CiFaceSmile />
          </span>
          <input type="text" placeholder="Type message" />
        </div>
        <div className="attach-area">
          <MdKeyboardVoice className="voice" />
          <CgAttachment className="voice" />
          <div className="sendmsg">
            <span className="mui">Send</span>
            <FaTelegramPlane className="mu"/>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
