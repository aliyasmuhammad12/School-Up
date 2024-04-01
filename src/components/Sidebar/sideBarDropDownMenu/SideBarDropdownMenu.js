import React, { useState } from "react";
import "./sideBarDropDown.css";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "react-feather";

const SidebarDropdownMenu = ({
  label,
  dropOptions,
  link,
  icon,
  dropHeight,
  isActive,
  setSideBarActive,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sidebar-dropdown-menu">
      <div className="sidebar-dropdown-img-label">
        <div
          className={`sidebar-item-icon-label sidebar-menu-item sidebar-drop-menu-head ${
            isActive ? "sidebar-link-active" : ""
          }`}
          onClick={() => setOpen(!open)}
        >
          <div className="sidebar-icon-outer">{icon}</div>
          <div className="sidebar-dropdown-label-chevron">
            <Link
              className={`sidebar-dropdown-label sidebar-single-link ${
                isActive ? "sidebar-link-active" : ""
              }`}
            >
              {label}
            </Link>
            {open ? <ChevronUp /> : <ChevronDown />}
          </div>
        </div>
        <ul
          // className="sidebar-dropdown-links .side-bar-menu-options"
          className={`sidebar-dropdown-links ${
            isActive ? "sidebar-link-active" : ""
          }`}
          style={{ maxHeight: `${open ? dropHeight : "0px"}` }}
        >
          {dropOptions.map((option, index) => {
            return (
              // <Link to={option.link} className="sidebar-dropdown-link" key={index}>
              //   {option.title}
              // </Link>
              <Link
                className={`sidebar-dropdown-link ${
                  option.isActive
                    ? "sidebar-link-active sidebar-link-active-bg"
                    : ""
                }`}
                key={index}
                to={option.link}
                onClick={() => setSideBarActive(false)}
              >
                {option.title}
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SidebarDropdownMenu;
