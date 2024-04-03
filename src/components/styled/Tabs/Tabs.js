import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./tabs.css";
import { getActiveTab } from "../../utils/activeTabs";

const Tabs = ({ width = 690, options, activeOption, setActiveOption }) => {
  const location = useLocation();

  return (
    <div className="global-tabs-container" style={{ maxWidth: `${width}px` }}>
      {options.map((option, index) => (
        <Link
          key={index}
          to={`/schoolup/${option.toLowerCase().replace(" ", "")}`}
          className={`global-tabs-option ${
            option.toLowerCase() === activeOption.toLowerCase()
              ? "global-tabs-option-active"
              : ""
          } ${getActiveTab(location.pathname, [
            `/schoolup/${option.toLowerCase().replace(" ", "")}`,
          ])}`}
          onClick={() => setActiveOption(option)}
        >
          <h3>{option}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
