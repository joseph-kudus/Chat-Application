import React from "react";
import "../styles/dashboardlayout.css";
import { Link } from "react-router";

import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";

function DashboardLayout() {
  return (
    <div className="dashboardlayout">
      <div className="container">
      {/*Sidebar section start */}
      <SideBar/>
        <div className="content-wrap">
          {/*header here */}
          <Header />
          <main className="main">main content</main>
          {/*Footer section start */}
          <Footer />
          {/*Footer section end */}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
