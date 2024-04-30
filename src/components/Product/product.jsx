import React, { useEffect, useState } from "react";
import './product.css';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

import Tooltip from '@mui/material/Tooltip';


const Product = (props)=>{

    const [productItem,setProductItem] = useState()

    useEffect(()=>{
        // console.log(props.item);
        // window.scrollTo(0,0);
        setProductItem(props.item);

    },[props.item])
    return(
        <>
            <div className="ProductCard position-relative">
                {
                    props.tag!==null && props.tag!==undefined &&
                    <span className={`badge ${props.tag}`}>{props.tag}</span>
                }

                {
                    productItem!==undefined &&
                    <> 
                        <Link to={`/product/${productItem.id}`}>
                            <div className="img-Wrapper position-relative">
                                <div className="p-4 align-items-center d-flex justify-content-center">
                                    <img src={productItem.catImg+'?im=Resize=(420,420)'} className="w-100"/>
                                </div>
                                <div className="overlay">
                                    <ul className="list list-inline">
                                        <Tooltip title="Quick View" placement="top-start" arrow>
                                            <li className="list-inline-item ab">
                                                <Link className="cursor"><RemoveRedEyeOutlinedIcon/></Link>
                                            </li>
                                        </Tooltip>
                                        <Tooltip title="Add to Wishlist" placement="top" arrow>
                                        <li className="list-inline-item ab">
                                            <Link className="cursor"><FavoriteBorderOutlinedIcon/></Link>
                                        </li>
                                        </Tooltip>
                                        <Tooltip title="compare" placement="top" arrow>
                                        <li className="list-inline-item">
                                            <Link className="cursor"><SyncAltOutlinedIcon/></Link>
                                        </li>
                                        </Tooltip>
                                    </ul>
                                </div>
                            </div>
                        </Link>
                        <div className="info">
                            <span className="d-block Category_name">{productItem.brand}</span>
                            <div className="ProductName">
                                <h4 className="title"><Link>{productItem.productName}</Link></h4>
                            </div>
                            <Rating name="read-only" value={productItem.rating} precision={0.5} readOnly />
                            <span className="d-block brand">By <Link className="text-g">{productItem.brand}</Link></span>
                            <div className="d-flex align-items-center mt-4">
                                <div className="d-flex align-items-center mr-auto">
                                    <span className="price">Rs. {productItem.price}</span><span className="old_price">Rs. {productItem.oldPrice}</span>
                                </div>
                                <Button className="Button transition" onClick={()=>{
                                    props.addToCart(productItem)
                                }}><ShoppingCartOutlinedIcon/>Add</Button>
                            </div>
                        </div>
                    </>
                }
                
            </div>
        </>
    )
} 

export default Product;