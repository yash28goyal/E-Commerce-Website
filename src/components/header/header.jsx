import React, { useEffect, useRef, useState } from 'react'
import '../header/header.css'
import Logo from '../../assets/images/logo.svg';   
import SearchIcon from '@mui/icons-material/Search' 
import Select from '../selectDrop/select';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'; //location icon
// Promise based HTTP client for the browser and node.js and buttons from material ui
import Button from '@mui/material/Button';
import axios from 'axios';
//icon import
import IconCompare from '../../assets/images/icon-compare.svg'
import IconCart from '../../assets/images/icon-cart.svg'
import IconHeart from '../../assets/images/icon-heart.svg'
import IconUser from '../../assets/images/icon-user.svg'
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
//Nav bar
import Nav from '../Navigation/Nav';

function header(props) {
    const [isOpenDropDown,SetOpenDropDown] = useState(false);
    const [windowWidth,setWindowWidth] = useState(window.innerWidth);
    const [openSearch,setOpenSearch] = useState(false);
    const [openSearchT,setOpenSearchT] = useState(false);
    
    const searchInput = useRef()
    
    const [Categories,setCategories] = useState([
        'Milks and Dairies',
        'Wines and Drinks',
        'Clothing & Beauty',
        'Fresh Seafood',
        'Pet Food & Toys',
        'Fast Food',
        'Baking Materials',
        'Vegetables',
        'Fresh Fruits',
        'Breads and Juices',
        'Milks and Dairies',
        'Wines and Drinks',
        'Clothing & Beauty',
        'Fresh Seafood'
    ]);


    const countryList = [];
    useEffect(()=>{
        getCountry('https://countriesnow.space/api/v0.1/countries/');
    },[]);

    const getCountry = async(url)=>{
        try{
            await axios.get(url).then((res)=>{
                if(res!==null){
                    res.data.data.map((item,index)=>{
                        countryList.push(item.country);
                    })
                }
            })
        }catch(error){
            console.log(error.message);
        }
    }

    const searchOpen=()=>{
        setOpenSearch(true);
        searchInput.current.focus()
    }
    const searchOpenT=()=>{
        setOpenSearchT(true);
    }
    const closeSearch=()=>{
        setOpenSearch(false);
        searchInput.current.blur();
        searchInput.current.value="";
    }
    const closeSearchT=()=>{
        setOpenSearchT(false);
    }
  return (
    <>
    <header>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-2 headpart1 d-flex align-items-center">
                    <Link to="/" className='logoo'><img  src={Logo} /></Link>
                    {
                        windowWidth<992 &&
                        <div className="ml-auto d-flex align-items-center">
                            <div className="navToggle mr-1" onClick={searchOpen}><SearchIcon/></div>
                            <div className="navToggle" onClick={searchOpenT}><MenuIcon/></div>
                        </div>
                    }
                </div>
                <div className="col-sm-5 headpart2">
                    <div className={`headersearch d-flex align-items-center ${openSearch===true ? 'open' : ''}`}>
                        {
                            windowWidth<992 && 
                            <div className='closeSearch' onClick={closeSearch}><ArrowBackIosNewIcon/></div>
                        }
                        {
                            windowWidth<992 &&
                            <div className="countryWrapper mr-3"><Select data={countryList} placeholder='Your Location' icon={<LocationOnOutlinedIcon style={{opacity:'0.5'}}/>}/></div>
                        }
                        <Select data={Categories} placeholder='All Categories' icon={false}/>
                        <div className="search d-flex">
                            <input type="text" placeholder='Search for items...' ref={searchInput}/>
                            <SearchIcon className='searchicon cursor'/>
                        </div>
                    </div>
                    {
                        windowWidth<992 &&
                        <div className={`taskMenu d-flex align-items-center ${openSearchT===true ? 'openT' : ''}`}>
                            {
                                windowWidth<992 && 
                                <div className='closeSearchT' onClick={closeSearchT}><ArrowBackIosNewIcon/></div>
                            }
                            <ul className='task'>
                                <li>
                                    <Button onClick={closeSearchT}><Link to='/'>Home</Link></Button>
                                </li>
                                <li>
                                    <Button onClick={closeSearchT}><Link to='/cat/groceries'>Groceries</Link></Button>
                                </li>
                                <li>
                                    <Button onClick={closeSearchT}><Link to='/cat/electronics'>Electronics</Link></Button>
                                </li>
                                <li>
                                    <Button onClick={closeSearchT}><Link to='/cat/fashion'>Fashion</Link></Button>
                                </li>
                                <li>
                                    <Button onClick={closeSearchT}><Link to='/about'>About</Link></Button>
                                </li>
                                <li>
                                    <Button onClick={closeSearchT}><Link>Mega Menu</Link></Button>
                                </li>
                                <li>
                                    <Button onClick={closeSearchT}><Link>Pages</Link></Button>
                                </li>
                                <li>
                                    <Button onClick={closeSearchT}><Link to='/about'>Contact</Link></Button>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
                <div className="col-sm-5 d-flex align-items-center headpart3">
                    <div className="ml-auto d-flex align-items-center">
                        <div className="countryWrapper d-flex">
                            <Select data={countryList} placeholder='Your Location' icon={<LocationOnOutlinedIcon style={{opacity:'0.5'}}/>}/>  
                        </div>
                        <ul className="list list-inline mb-0 headerIcons">
                            <li className="list-inline-item"><span><img src={IconCompare}/><span className="superScript bg-success rounded-circle">0</span>Compare</span></li>
                            <li className="list-inline-item"><span><img src={IconHeart}/><span className="superScript bg-success rounded-circle">0</span>Wishlist</span></li>
                            <Link to={'/cart'}><li className="list-inline-item"><span><img src={IconCart}/><span className="superScript bg-success rounded-circle">{props.cartArray.length}</span>Cart</span></li></Link>
                            <Link to='/login'>
                            <li className="list-inline-item">
                                <span onClick={()=>{SetOpenDropDown(!isOpenDropDown)}}>
                                    <img src={IconUser}/>
                                    Account
                                </span> 
                            </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <Nav data={props.data}/>
    </>
  )
}

export default header