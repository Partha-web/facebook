import React from "react";
import {
  FaFacebook,
  FaSistrix,
  FaHome,
  FaFontAwesomeFlag,
  FaVideo,
  FaUsers,
  FaGamepad,
  FaPlus,
  FaFacebookMessenger,
  FaBell,
  FaCaretDown,
} from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__first">
        <div className="navbar__first-logo">
          <FaFacebook className="navbar__logo" />
        </div>
        <div className="navbar__first-search">
          <input
            type="text"
            className="navbar__first-searchbar"
            placeholder="Facebook Search"
          />
          <FaSistrix className="navar__searchIcon" />
        </div>
      </div>
      <div className="navbar__middle">
        <span className="middleIcon">
          <FaHome className="navbar__middle-icons" />
        </span>
        <span className="middleIcon">
          <FaFontAwesomeFlag className="navbar__middle-icons" />
          <span className="navbar__notify">3</span>
        </span>
        <span className="middleIcon">
          <FaVideo className="navbar__middle-icons" />
          <span className="navbar__notify">10</span>
        </span>
        <span className="middleIcon">
          <FaUsers className="navbar__middle-icons" />
          <span className="navbar__notify">22</span>
        </span>
        <span className="middleIcon">
          <FaGamepad className="navbar__middle-icons" />
          <span className="navbar__notify">5</span>
        </span>
      </div>
      <div className="navbar__last">
        <span className="navbar__last-section" style={{margin:'0px'}}>
          {/* Profile */}
        <div className="sidebar__list-img">
            <img src="https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=600" alt="group image" />
         </div>          
        </span>
        <span className="navbar_profile_name">
        Partha 
        </span>
        <span className="navbar__last-section">
          <FaPlus />
        </span>
        <span className="navbar__last-section">
          <FaFacebookMessenger />
        </span>
        <span className="navbar__last-section">
          <FaBell />
        </span>
        <span className="navbar__last-section">
          <FaCaretDown />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
