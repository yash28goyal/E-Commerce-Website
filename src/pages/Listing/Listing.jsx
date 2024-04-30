import React , {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import './Res.css'; 

import Button from '@mui/material/Button';
import SideBar from '../../components/Sidebar';

import HomeIcon from '@mui/icons-material/Home';
import Product from '../../components/Product/product';
import FilterListIcon from '@mui/icons-material/FilterList';
import GridViewIcon from '@mui/icons-material/GridView';

function Listing(props) {
  const [isOpenDropDown,SetOpenDropDown] = useState(false);
  const [isOpenDropDown1,SetOpenDropDown1] = useState(false);
  const [heading,setHeading] = useState("Snacks")

  const [dataProduct,setDataProduct] = useState([])
  const {other,id} = useParams()

  var itemsDataProduct = []

  useEffect(()=>{
    // alert(props.single)
    // alert(id)
    props.data.length!==0 &&
    props.data.map((item)=>{
        if(props.single===true){
            if(item.cat_name.toLowerCase() === id.toLowerCase()){
                setHeading(item.cat_name)
                item.items.length!==0 &&    
                item.items.map((item_)=>{
                    item_.products.length!==0 &&
                    item_.products.map((product)=>{
                        itemsDataProduct.push(product);
                    })
                })
            }
        }
    })

    const item_data = itemsDataProduct.filter((item,index)=>itemsDataProduct.indexOf(item)==index);
    // console.log(item_data); 
    setDataProduct(item_data);
    // console.log(itemsDataProduct);
  },[id])

  return (
    <>
        <section className="ListingPage">
            <div className="container-fluid">
                <div className="ItemsHeader">
                    <h1>{heading}</h1>
                    <ul className="list list-inline d-flex align-items-center mt-2">
                        <li className="list-inline-item ">
                            <Link to="/" className='d-flex align-items-center'><HomeIcon/>Home </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="/">Shop </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="/">{heading} </Link>
                        </li>
                    </ul>
                </div>

                <div className="ListingData">
                    <div className="row">
                        <div className="col-md-3 SideBarWrapper">
                            <SideBar/>
                        </div>
                        <div className="col-md-9 RightContent Home_Product">
                            <div className="topStrip d-flex align-items-center p-4">
                                <p>We found <span className='text-g'>Few</span> items for you.</p>
                                <div className="ml-auto d-flex align-items-center">
                                    <div className="tab_ position-relative">
                                        <Button className="Btn" onClick={()=>{SetOpenDropDown(!isOpenDropDown)}}><GridViewIcon/><span> Show: 50</span></Button>
                                        {
                                            isOpenDropDown!==false &&
                                            <ul className="dropdownmenu">
                                                <li><Button className='d-flex align-items-center' onClick={()=>{SetOpenDropDown(false)}}>50</Button></li>
                                                <li><Button className='d-flex align-items-center' onClick={()=>{SetOpenDropDown(false)}}>100</Button></li>
                                                <li><Button className='d-flex align-items-center' onClick={()=>{SetOpenDropDown(false)}}>150</Button></li>
                                                <li><Button className='d-flex align-items-center' onClick={()=>{SetOpenDropDown(false)}}>200</Button></li>
                                                <li><Button className='d-flex align-items-center' onClick={()=>{SetOpenDropDown(false)}}>All</Button></li>
                                            </ul>
                                        }
                                    </div>
                                    <div className="tab_ ml-3 position-relative">
                                        <Button className="Btn" onClick={()=>{SetOpenDropDown1(!isOpenDropDown1)}}><FilterListIcon/><span> Sort By: Featured</span></Button>
                                        {
                                            isOpenDropDown1!==false &&
                                            <ul className="dropdownmenu">
                                                <li><Button onClick={()=>{SetOpenDropDown1(false)}}>Featured</Button></li>
                                                <li><Button onClick={()=>{SetOpenDropDown1(false)}}>Price: Low To High</Button></li>
                                                <li><Button onClick={()=>{SetOpenDropDown1(false)}}>Price: High To Low</Button></li>
                                                <li><Button onClick={()=>{SetOpenDropDown1(false)}}>Release Date</Button></li>
                                                <li><Button onClick={()=>{SetOpenDropDown1(false)}}>Avg. Rating</Button></li>
                                            </ul>
                                        }  
                                    </div>
                                </div>
                            </div>

                            <div className="ProductRow">

                                {
                                    dataProduct.length!==0 &&
                                    dataProduct.map((item,index)=>{
                                        return(
                                            <div className="ProductItems" key={index}>
                                                <Product tag={item.type} item={item} addToCart={props.addToCart}/>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Listing