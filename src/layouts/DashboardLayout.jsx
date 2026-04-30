import React from "react";
import { Link } from "react-router-dom";

import SideBar from "../component/layout/SideBar";
import Header from "../component/layout/Header";
import Footer from "../component/layout/Footer";
import "../styles/dashboardlayout.css";
import ChatWindow from "../component/chat/ChatWindow";

function DashboardLayout() {
  return (
    <div className="dashboardlayout">
      <div className="container">
        {/*Sidebar section start */}
        <SideBar />
        <div className="content-wrap">
          {/*header here */}
          <Header />
          {/**Main content here */}
          <ChatWindow />
          {/*Footer section start */}
          <Footer />
          {/*Footer section end */}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
