import React, { useState } from "react";
import "../Style/style.scss";
import SearchBar from "material-ui-search-bar";
import { getData } from "../Controller/Weather";

// Header of Web Page
const Header = ({ setDaily_data, setCity, setDaily_display }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="row">
      {/* Search Bar to take user input */}
      <SearchBar
        autoFocus
        className="search"
        value={search}
        onChange={(value) => setSearch(value)}
        onRequestSearch={(value) =>
          getData(value, setDaily_data, setCity, setDaily_display)
        }
        placeholder="Enter Location!"
      />
    </div>
  );
};

export default Header;
