import React from "react";
import Search from "../svg/Search";

const SearchSection = ({ handleSubmit, inputSearch }) => {
  return (
    <>
      <div className="search_section_container">
        <div className="search_section">
          <Search size={window.innerWidth <= 600 ? 20 : 30} />
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search" ref={inputSearch} />
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchSection;
