import React, { useState } from "react";
import "../Style/style.scss";
import SearchBar from "material-ui-search-bar";
import { getData } from "../Controller/Weather";

// Header of Web Page
const Header = () => {
  const [search, setSearch] = useState("islamabad");
  return (
    <div className="row">
      {/* Search Bar to take user input */}
      <SearchBar
        autoFocus
        className="search"
        value={search}
        onChange={(value) => setSearch(value)}
        onRequestSearch={(value) => getData(value)}
        placeholder="Search the weather!"
      />
    </div>
  );
};

export default Header;
