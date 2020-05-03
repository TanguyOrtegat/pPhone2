import React from "react";
import "./Searchbar.scss";
import { ReactSVG } from "react-svg";
import SearchbarIcon from "../../../assets/icons/searchbar.svg";

const Searchbar: React.FC = () => {
    return (
        <div className="searchbar-container">
            <ReactSVG id="searchbar-icon" src={SearchbarIcon} />
            <input type="text" name="searchbar" id="searchbar" placeholder="Search" />
        </div>
    );
}

export default Searchbar;