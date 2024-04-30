import React4 from "react";
import './footer.css';
import { Link } from "react-router-dom";

import icon1 from '../../assets/images/icon-1.svg';
import icon2 from '../../assets/images/icon-2.svg';
import icon3 from '../../assets/images/icon-3.svg';
import icon4 from '../../assets/images/icon-4.svg';
import icon5 from '../../assets/images/icon-5.svg';

import Logo from '../../assets/images/logo.svg'
import App_store from '../../assets/images/app-store.jpg'
import google_play from '../../assets/images/google-play.jpg'
import payment_method from '../../assets/images/payment-method.png'

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = ()=>{
    return(
        <>
        <div className="FooterWrapper">
            <div className="banners mt-4">
                <div className="container-fluid">
                    <div className="p-4 d-flex gap-3 tth">
                        <div className="col border_grey radius d-flex align-items-center">
                            <div className="img_banner">
                                <img src={icon1}/>
                            </div>
                            <div className="info_banner">
                                <div className="info_banner_heading">
                                    <h2>Best prices & offers</h2>
                                    <p>Orders $50 or more</p>
                                </div>
                            </div>
                        </div>
                        <div className="col border_grey radius d-flex align-items-center">
                            <div className="img_banner">
                                <img src={icon2}/>
                            </div>
                            <div className="info_banner">
                                <div className="info_banner_heading">
                                    <h2>Free delivery</h2>
                                    <p>24/7 amazing services</p>
                                </div>
                            </div>
                        </div>
                        <div className="col border_grey radius d-flex align-items-center">
                            <div className="img_banner">
                                <img src={icon3}/>
                            </div>
                            <div className="info_banner">
                                <div className="info_banner_heading">
                                    <h2>Great daily deal</h2>
                                    <p>When you sign up</p>
                                </div>
                            </div>
                        </div>
                        <div className="col border_grey radius d-flex align-items-center">
                            <div className="img_banner">
                                <img src={icon4}/>
                            </div>
                            <div className="info_banner">
                                <div className="info_banner_heading">
                                    <h2>Wide assortment</h2>
                                    <p>Mega Discounts</p>
                                </div>
                            </div>
                        </div>
                        <div className="col border_grey radius d-flex align-items-center">
                            <div className="img_banner">
                                <img src={icon5}/>
                            </div>
                            <div className="info_banner">
                                <div className="info_banner_heading">
                                    <h2>Easy returns</h2>
                                    <p>Within 30 days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 part1">
                            <Link to="/"><img src={Logo}/></Link>
                            <br />
                            <p className="head">Awesome grocery store website template</p>
                            <br />
                            <p><LocationOnOutlinedIcon/> <strong>Address:</strong> 5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
                            <p><HeadsetMicOutlinedIcon/> <strong>Call Us:</strong>(+91) - 540-025-124553</p>
                            <p><SendOutlinedIcon/> <strong>Email:</strong>sale@Nest.com</p>
                            <p><AccessTimeOutlinedIcon/> <strong>Hours:</strong>10:00 - 18:00, Mon - Sat</p>

                        </div>
                        <div className="col-md-9 part2">
                            <div className="row">
                                <div className="col-md-3 footer-item">
                                    <h3>Company</h3>
                                    <ul className="footer-list  mb-sm-5 mb-md-0">
                                        <li><Link to="#">About Us</Link></li>
                                        <li><Link to="#">Delivery Information</Link></li>
                                        <li><Link to="#">Privacy Policy</Link></li>
                                        <li><Link to="#">Terms &amp; Conditions</Link></li>
                                        <li><Link to="#">Contact Us</Link></li>
                                        <li><Link to="#">Support Center</Link></li>
                                        <li><Link to="#">Careers</Link></li></ul>
                                </div>
                                <div className="col-md-3 footer-item">
                                    <h3>Account</h3>
                                    <ul className="footer-list  mb-sm-5 mb-md-0">
                                        <li><Link to="#">Sign In</Link></li>
                                        <li><Link to="#">View Cart</Link></li>
                                        <li><Link to="#">My Wishlist</Link></li>
                                        <li><Link to="#">Track My Order</Link></li>
                                        <li><Link to="#">help Ticket</Link></li>
                                        <li><Link to="#">Shipping Details</Link></li>
                                        <li><Link to="#">Compare Products</Link></li></ul>
                                </div>
                                <div className="col-md-3 footer-item">
                                    <h3>Corporate</h3>
                                    <ul className="footer-list  mb-sm-5 mb-md-0">
                                        <li><Link to="#">Become a Vendor</Link></li>
                                        <li><Link to="#">Affiliate Program</Link></li>
                                        <li><Link to="#">Farm Business</Link></li>
                                        <li><Link to="#">Farm Careers</Link></li>
                                        <li><Link to="#">Our Suppliers</Link></li>
                                        <li><Link to="#">Accessibility</Link></li>
                                        <li><Link to="#">Promotions</Link></li></ul>
                                </div>
                                <div className="col-md-3 footer-item">
                                    <h3>Popular</h3>
                                    <ul className="footer-list  mb-sm-5 mb-md-0">
                                        <li><Link to="#">Milk & Flavoured Milk</Link></li>
                                        <li><Link to="#">Butter and Margarine</Link></li>
                                        <li><Link to="#">Eggs Substitutes</Link></li>
                                        <li><Link to="#">Marmalades</Link></li>
                                        <li><Link to="#">Sour Cream and Dips</Link></li>
                                        <li><Link to="#">Tea & Kombucha</Link></li>
                                        <li><Link to="#">Cheese</Link></li></ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="InstallAppFooter">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Install App</h1>
                                <p>From App Store or Google Play</p>
                                <div className="Img_Install_App_Footer">
                                    <Link><img src={App_store}></img></Link>
                                    <Link><img src={google_play}></img></Link>
                                </div>
                                <p>Secured Payment Gateways</p>
                                <img src={payment_method} />
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br />
                <hr />
                <div className="End_footer">
                    <div className="container-fluid px-2 mt-3">
                        <div className="d-grid dg3">
                            <div className="part-1">
                                <p>&copy; 2024, <span><strong>Nest</strong></span> - HTML Ecommerce Template</p>
                                <p>All rights reserved</p>
                            </div>
                            <div className="d-flex align-items-center part-2">
                                <div className="info_call d-flex">
                                    <LocalPhoneOutlinedIcon/>
                                    <div className="div_info">
                                        <h2>1900 - 6666</h2>
                                        <p>Working 8:00 - 22:00</p> 
                                    </div>
                                </div>
                                <div className="info_call d-flex">
                                    <LocalPhoneOutlinedIcon/>
                                    <div className="div_info">
                                        <h2>1900 - 8888</h2>
                                        <p>24/7 Support Center</p> 
                                    </div>
                                </div>  
                            </div>
                            <div className=" part-3">
                                <div className="info_img_div d-flex align-items-center">
                                    <p>Follow Us</p>
                                    <ul className="list list-inline">
                                        <li className="list-inline-item"><Link to="/"><FacebookOutlinedIcon className="mt-2"/></Link></li>
                                        <li className="list-inline-item"><Link to="/"><TwitterIcon className="mt-2"/></Link></li>
                                        <li className="list-inline-item"><Link to="/"><InstagramIcon className="mt-2"/></Link></li>
                                        <li className="list-inline-item"><Link to="/"><YouTubeIcon className="mt-2"/></Link></li>
                                    </ul>
                                </div>
                                <p className="title">Up to 15% discount on your first subscribe</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        </>
    )
}

export default Footer;