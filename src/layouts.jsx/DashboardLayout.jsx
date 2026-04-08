import React from "react";
import "../styles/dashboardlayout.css";
import { Link } from "react-router";

import SideBar from "./SideBar";
import Header from "./Header";
import MainContentArea from "./MainCotentArea";
import Footer from "./Footer";

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
          <MainContentArea />
          {/*Footer section start */}
          <Footer />
          {/*Footer section end */}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
