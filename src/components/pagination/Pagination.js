import React from 'react'
import { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import back from "../pagination/icons/back.png"
import forward from "../pagination/icons/forward.png"
import './pagination.css'

function Pagination() {
  return (
    <div className='pagination'>
        <div className='dropDown'>
            <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
        </div>
        <div className='pages'>
            <p>of 507 Pages</p>
        </div>
        <div className='arrow'>
           <img src={back}/>
           <img src={forward}/>
        </div>
    </div>
  )
}

export default Pagination