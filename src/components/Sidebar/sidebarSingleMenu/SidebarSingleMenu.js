import React from "react";
import "./sidebarSingleMenu.css";
import { Link } from "react-router-dom";

const SidebarSingleMenu = ({
  link,
  label,
  icon,
  isActive,
  setSideBarActive,
}) => {
  return (
    <Link
      to={link}
      className={`sidebar-menu-item ${isActive ? "sidebar-link-active" : ""}`}
      onClick={() => setSideBarActive(false)}
    >
      <div className="sidebar-icon-outer">{icon}</div>
      <Link
        className={`sidebar-single-link ${
          isActive ? "sidebar-link-active" : ""
        }`}
        to={link}
      >
        {label}
      </Link>
    </Link>
  );
};

export default SidebarSingleMenu;
