import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import Sidebar from "../../Sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { getActiveTab } from "../../utils/activeTabs";
import "./schoolUpLayout.css";
import { ReactComponent as DashboardIcon } from "../icons/dashboard.svg";
import { ReactComponent as RevenueIcon } from "../icons/dollar.svg";
import { ReactComponent as Subscribe } from "../icons/subscribe.svg";
import { ReactComponent as Schools } from "../icons/schools.svg";
import { ReactComponent as Reveiws } from "../icons/reveiws.svg";
import { ReactComponent as Settings } from "../icons/settings.svg";
import { ReactComponent as Blogs } from "../icons/blogs.svg";

import SidebarSingleMenu from "../../Sidebar/sidebarSingleMenu/SidebarSingleMenu";
import SidebarDropdownMenu from "../../Sidebar/sideBarDropDownMenu/SideBarDropdownMenu";

function SchoolUpLayout() {
  const location = useLocation();
  const [sideBarActive, setSideBarActive] = useState(false);
  return (
    <>
      <Navbar setSideBarActive={setSideBarActive} />
      <Sidebar
        sideBarActive={sideBarActive}
        setSideBarActive={setSideBarActive}
      >
        <div className="Schoolup-sidebar-top">
          <h1>School Up</h1>
        </div>
        <div className="sidebar-links">
          <SidebarSingleMenu
            link="/schoolup/dashboard"
            label="Dashboard"
            icon={<DashboardIcon />}
            isActive={getActiveTab(location.pathname, ["/schoolup/dashboard"])}
            setSideBarActive={setSideBarActive}
          />
          <SidebarSingleMenu
            link="/schoolup/revenue"
            label="Revenue"
            icon={<RevenueIcon />}
            isActive={getActiveTab(location.pathname, ["/schoolup/revenue"])}
            setSideBarActive={setSideBarActive}
          />
          <SidebarDropdownMenu
            dropHeight="200px"
            icon={<Subscribe />}
            label="Subscriptions"
            dropOptions={[
              {
                title: "All Subscriptions",
                link: "/schoolUp/allSubscriptions",
                isActive: getActiveTab(location.pathname, [
                  "/schoolUp/allSubscriptions",
                ]),
              },
              // {
              //   title: "Active Subscriptions",
              //   link: "/schoolUp/activeSubsriptions",
              //   isActive: getActiveTab(location.pathname, [
              //     "/schooolUp/activeSubsriptions",
              //   ]),
              // },
              {
                title: "Active Subscriptions",
                link: "/schoolup/activeSubsriptions",
                isActive: getActiveTab(location.pathname, [
                  "/schoolup/activeSubsriptions",
                ]),
              },
              {
                title: "Expired Subscription",
                link: "/schoolup/expiredSubscriptions",
                isActive: getActiveTab(location.pathname, [
                  "/schoolup/expiredSubscriptions",
                ]),
              },
            ]}
            isActive={getActiveTab(location.pathname, [
              "/schoolUp/allSubscriptions",
              "/schooolUp/activeSubsriptions",
              "/schoolup/expiredSubscriptions",
            ])}
            setSideBarActive={setSideBarActive}
          />
          <SidebarSingleMenu
            link="/schoolup/schools"
            label="Schools"
            icon={<Schools/>}
            isActive={getActiveTab(location.pathname, ["/schoolup/schools"])}
            setSideBarActive={setSideBarActive}
          />
          <SidebarSingleMenu
            link="/schoolup/reveiws"
            label="Reveiws"
            icon={<Reveiws/>}
            isActive={getActiveTab(location.pathname, ["/schoolup/reveiws"])}
            setSideBarActive={setSideBarActive}
          />
          <SidebarSingleMenu
            link="/schoolup/setting"
            label="Setting"
            icon={<Settings/>}
            isActive={getActiveTab(location.pathname, ["/schoolup/setting"])}
            setSideBarActive={setSideBarActive}
          />
          <SidebarSingleMenu
            link="/schoolup/blogs"
            label="Blogs"
            icon={<Blogs/>}
            isActive={getActiveTab(location.pathname, ["/schoolup/blogs"])}
            setSideBarActive={setSideBarActive}
          />
        </div>
      </Sidebar>
      <div className="schoolup-layout-right-side">
        <Outlet />
      </div>
    </>
  );
}

export default SchoolUpLayout;
