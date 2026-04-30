import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBox = () => {
  return (
    <div className="SearchBox">
      <IoIosSearch />
      <input type="text" placeholder="Type your, message" />
    </div>
  );
};
export default SearchBox;
