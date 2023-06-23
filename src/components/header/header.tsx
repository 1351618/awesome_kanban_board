import React from "react"
import "./header.css"
import profile_icon from "./Profile.png"

function Header() {
  return (
    <div className="header">
      <span className="header__span">Awesome Kanban Board</span>
      <div className="header__icon">
        <img  className="header__icon_img" src={profile_icon} alt="profile_icon" />
      </div>
    </div>
  );
}

export default Header;
