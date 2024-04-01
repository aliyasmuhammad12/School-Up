import React from 'react';
import "./sidebar.css";

function Sidebar({children}) {
  return (
    <div className='sidebar'>
        <div className='sidebar-inner'>
        <div className='sidebar-links'>
            {children}
        </div>
        </div>
    </div>
  )
}

export default Sidebar;