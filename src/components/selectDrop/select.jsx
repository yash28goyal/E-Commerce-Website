import React, { useState } from 'react';
import '../selectDrop/select.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

const Select = ({data,placeholder,icon})=>{

    const [isOpenSelect,setIsOpenSelect] = useState(false);
    const [SelectedIndex,setSelectedIndex] = useState(0);
    const [SelectedItem,setSelectedItem] = useState(placeholder);

    const [Data,setData] = useState(data);
    const [Data1,setData1] = useState(data);

    const OpenSelect = ()=>{
        setIsOpenSelect(!isOpenSelect);
    }

    const closeSelect = (index,name)=>{
        setSelectedIndex(index);
        setIsOpenSelect(false);
        setSelectedItem(name)

    }

    const filterList=(e)=>{
        const keyword = e.target.value.toLowerCase();

        const list  = Data1.filter((item)=>{
            return item.toLowerCase().includes(keyword);
        })  
        
        const list1 = list.filter((item,index) => list.indexOf(item) === index);

        setData(list1)
    }
    return(
        <>
        <ClickAwayListener onClickAway={()=>setIsOpenSelect(false)}>
            <div className="selectDrop cursor position-relative">
                
                <span className='openSelect' onClick={OpenSelect}>{icon}{SelectedItem.length>17 ? SelectedItem.substr(0,14)+"..." : SelectedItem}<KeyboardArrowDownIcon className='arrow'/></span> 
                {isOpenSelect===true &&
                <div className="selectDropDown">
                <div className="searchField">
                    <input type="text" placeholder='Search here...' onChange={filterList}/>
                </div>
                <ul className="searchResult">
                    <li key={0} onClick={()=>closeSelect(0 , placeholder)} className={`${SelectedIndex===0 ? 'active' : ''}`}>{placeholder}</li>
                    {
                        Data.map((item,index)=>{
                            return(
                                <li key={index+1} onClick={()=>closeSelect(index+1 , item)} className={`${SelectedIndex===index+1 ? 'active' : ''}`}>{item}</li>
                            )
                        })
                    }
                </ul>
                </div>}
            </div>
        </ClickAwayListener>
        </>
    )
}

export default Select;