import React from "react";
import "../styles/dashboardlayout.css";
import logohead from "../assets/Image/mingcute_chat-4-fill.png";
import { Link } from "react-router";

function DashboardLayout() {
  return (
    <div className="dashboardlayout">
      <div className="container">
        <aside className="drawer">
          <div className="logo-wrapper">
            <img src={logohead} alt="" />
            <span>Chattes</span>
          </div>
        </aside>
        <div className="content-wrap">
          <div className="header">header</div>
          <main className="main">main content</main>
          <footer className="footer">footer</footer>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
