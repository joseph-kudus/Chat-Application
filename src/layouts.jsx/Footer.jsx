import React from "react";
import { CiFaceSmile } from "react-icons/ci";
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
          <i class="fa-solid fa-user"></i>
          <p>Send</p>
          <i class="fa-regular fa-user"></i>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
