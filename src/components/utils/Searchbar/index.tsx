import React from "react";
import "./Searchbar.scss";
import { ReactSVG } from "react-svg";
import SearchbarIcon from "../../../assets/icons/searchbar.svg";

interface SearchBarProps {
  onSearchChanged: (search: string) => void;
}

const Searchbar: React.FC<SearchBarProps> = (props) => {
  return (
    <div className="searchbar-container">
      <ReactSVG id="searchbar-icon" src={SearchbarIcon} />
      <input
        type="text"
        name="searchbar"
        id="searchbar"
        placeholder="Search"
        onChange={(e) => props.onSearchChanged(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
