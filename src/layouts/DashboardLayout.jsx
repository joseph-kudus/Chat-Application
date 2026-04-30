import React from "react";
import Sidebar from "../component/layout/SideBar";
import Header from "../component/layout/Header";
import Footer from "../component/layout/Footer";
import ChatWindow from "../component/chat/ChatWindow";
import "../styles/dashboardlayout.css";

function DashboardLayout() {
  return (
    <div className="dashboardlayout">
      <div className="container">
        <Sidebar />
        <div className="content-wrap">
          <Header />
          <ChatWindow />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
