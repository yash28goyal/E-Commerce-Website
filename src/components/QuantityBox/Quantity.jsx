import React from 'react'
import './Quantity.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

const Quantity = (props) => {
  return (
    <>
        <div className="td">
            <div className="countersec">
                <input type="number" value={props.value} onChange={(e)=>{setInputValue(e.target.value)}}/>
                <span className="plus arrow" onClick={props.plus}><KeyboardArrowUpIcon/></span>
                <span className="minus arrow" onClick={props.minus}><KeyboardArrowDownIcon/></span>
            </div>
        </div>
    </>
  )
}

export default Quantity