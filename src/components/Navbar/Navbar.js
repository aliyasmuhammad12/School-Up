import React from 'react'
import './navbar.css'
import { CiSearch } from "react-icons/ci";
import img1 from "./icons/user.png"
import {ReactComponent as NotificationIcon} from "./icons/notification-bing.svg"
function Navbar() {
  return (
    <>
    <div className='navbar'>
       <div  className='search-user'>
        <div className='searchbar-side'>
            <input type='text' placeholder='Search...'/>
            <CiSearch/>
        </div>
            <div className='notification-icon-side'>
            <NotificationIcon/>
            </div>
            <div className="nav-user-icon">
              <img src={img1} alt="" />
            </div>
       </div>
    </div>
    </>
  )
}

export default Navbar