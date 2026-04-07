import React from "react";
import SearchBox from "./SearchBox";
import logohead from "../assets/Image/mingcute_chat-4-fill.png";
const SideBar =()=> {
    return(
        <aside className="drawer">
          <div className="logo-wraper">
            <img src={logohead} alt="" />
            <span>Chatties</span>
          </div>
          <SearchBox />
        </aside>
    );
};
export default SideBar;