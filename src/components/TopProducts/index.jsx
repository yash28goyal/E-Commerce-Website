import React from "react";
import './style.css';
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";

const TopProduct = (props)=>{
    return(
        <>
            <div className="TopSection_box">
                <h3>{props.title}</h3>

                <div className="items_top d-flex align-items-center">
                    <div className="img_top">
                        <Link>
                            <img src="https://nest-nextjs-13.vercel.app/assets/imgs/shop/product-12-1.jpg" className="w-100"/>
                        </Link>
                    </div>
                    <div className="info_top">
                        <Link to=""><h4 className="info_top_title">All Natural Italian-Style Chicken Meatballs</h4></Link>
                        <Rating name="read-only" value={2.5} precision={0.5} readOnly className="rate"/>
                        <div className="info_price d-flex align-items-center">
                            <p className="info_top_price text-g">$73</p>
                            <p className="info_top_old">$130</p>
                        </div>
                    </div>
                </div>
                <div className="items_top d-flex align-items-center">
                    <div className="img_top">
                        <Link>
                            <img src="https://nest-nextjs-13.vercel.app/assets/imgs/shop/product-12-1.jpg" className="w-100"/>
                        </Link>
                    </div>
                    <div className="info_top">
                        <Link to=""><h4 className="info_top_title">All Natural Italian-Style Chicken Meatballs</h4></Link>
                        <Rating name="read-only" value={2.5} precision={0.5} readOnly />
                        <div className="info_price d-flex align-items-center">
                            <p className="info_top_price text-g">$73</p>
                            <p className="info_top_old">$130</p>
                        </div>
                    </div>
                </div>
                <div className="items_top d-flex align-items-center">
                    <div className="img_top">
                        <Link>
                            <img src="https://nest-nextjs-13.vercel.app/assets/imgs/shop/product-12-1.jpg" className="w-100"/>
                        </Link>
                    </div>
                    <div className="info_top">
                        <Link to=""><h4 className="info_top_title">All Natural Italian-Style Chicken Meatballs</h4></Link>
                        <Rating name="read-only" value={2.5} precision={0.5} readOnly />
                        <div className="info_price d-flex align-items-center">
                            <p className="info_top_price text-g">$73</p>
                            <p className="info_top_old">$130</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopProduct;