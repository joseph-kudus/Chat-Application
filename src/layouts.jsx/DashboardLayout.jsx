import React from "react";
import "../styles/dashboardlayout.css";
import logohead from "../assets/Image/mingcute_chat-4-fill.png";
import { Link } from "react-router";
import {
  DotIcon,
  Phone,
  PhoneCall,
  Plus,
  Search,
  SmileIcon,
  Video,
} from "lucide-react";
import SearchBox from "../component/SearchBox";
import Header from "./Header";

function DashboardLayout() {
  return (
    <div className="dashboardlayout">
      <div className="container">
        <aside className="drawer">
          <div className="logo-wraper">
            <img src={logohead} alt="" />
            <span>Chatties</span>
          </div>
          <SearchBox />
        </aside>
        <div className="content-wrap">
          {/*header here */}
         <Header/>
          <main className="main">main content</main>
          <footer className="footer">
            <div className="footer-wraper">
              <div className="message-area">
                <span>
                  <SmileIcon />
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
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
