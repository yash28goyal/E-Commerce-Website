import React from "react";
import { Link } from "react-router-dom";
import './style.css'
import Button from '@mui/material/Button';

import About1 from '../../assets/images/about-1.png'
import About3 from '../../assets/images/about-5.png'
import About4 from '../../assets/images/about-6.png'
import About5 from '../../assets/images/about-8.png'

import icon1 from '../../assets/images/icon-1.svg';
import icon2 from '../../assets/images/icon-2.svg';
import icon3 from '../../assets/images/icon-3.svg';
import icon4 from '../../assets/images/icon-4.svg';
import icon5 from '../../assets/images/icon-5.svg';
import icon6 from '../../assets/images/icon-6.svg';

const About=()=>{
    return(
        <>
            <div className="About_Wrapper">
                <div className="container-fluid">
                    <div className="back_in_about">
                        <ul className="list list-inline">
                            <li className="list-inline-item"><Link to="/">Home / </Link></li>
                            <li className="list-inline-item"><Link to="/pages">Pages / </Link></li>
                            <li className="list-inline-item"><Link to="/about">About</Link></li>
                        </ul>
                    </div>
                    <div className="part1_about d-flex">
                        <div className="d-grid dg">
                        <div className="part1_about_img d-flex justify-content-center align-items-center" >
                            <div className="img_about1">
                                <img src={About1}/>
                            </div>
                        </div>
                        <div className="part1_about_info">
                            <h1>Welcome to Nest</h1>
                            <br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>
                            <br />
                            <p>Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>
                        </div>
                        </div>
                    </div>
                    <div className="part2_about">
                        <h1>What We Provide?</h1>
                        <div className="part2_about_cards d-flex">
                            <div className="container-fluid">
                                <div className="row gap-4 mt-5 px-5">
                                    <div className="col black">
                                        <img src={icon1} />
                                        <h2>Best Prices & Offers</h2>
                                        <br />
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                        <Button>Read more</Button>
                                    </div>
                                    <div className="col black">
                                        <img src={icon2} />
                                        <h2>Wide Assortment</h2>
                                        <br />
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                        <Button>Read more</Button>
                                    </div>
                                    <div className="col black">
                                        <img src={icon3} />
                                        <h2>Free Delivery</h2>
                                        <br />
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                        <Button>Read more</Button>
                                    </div>
                                    <div className="col black">
                                        <img src={icon4} />
                                        <h2>Easy Returns</h2>
                                        <br />
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                        <Button>Read more</Button>
                                    </div>
                                    <div className="col black">
                                        <img src={icon5} />
                                        <h2>100% Satisfaction</h2>
                                        <br />
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                        <Button>Read more</Button>
                                    </div>
                                    <div className="col black">
                                        <img src={icon6} />
                                        <h2>Great Daily Deal</h2>
                                        <br />
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                        <Button>Read more</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="part3_about container-fluid">
                        <div className="d-grid dg">
                        <div className="part3_about_img">
                            <div className="img_about3">
                                <img src={About3}/>
                            </div>
                        </div>
                        <div className="part3_about_info">
                            <h5>Our performance</h5>
                            <br />
                            <h1>Your Partner for e-commerce grocery solution</h1>
                            <br />
                            <p>Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
                            <br />
                            <p>Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
                        </div>
                        </div>
                    </div>
                    <div className="part4_about">
                        <div className="container-fluid">
                            <div className="row about4_info px-5">
                                <div className="col px-5">
                                    <h2>Who we are</h2>
                                    <br />
                                    <p>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</p>
                                </div>
                                <div className="col px-5">
                                    <h2>Our history</h2>
                                    <br />
                                    <p>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</p>
                                </div>
                                <div className="col px-5">
                                    <h2>Our mission</h2>
                                    <br />
                                    <p>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="part5_about">
                        <div className="part5_about_inner">
                            <div className="div_wrapper_about5">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col Team t1">
                                            <h1>12+</h1>
                                            <p>Glorious years</p>
                                        </div>
                                        <div className="col Team t2">
                                            <h1>36+</h1>
                                            <p>Happy clients</p>
                                        </div>
                                        <div className="col Team t3">
                                            <h1>58+</h1>
                                            <p>projects complete</p>
                                        </div>
                                        <div className="col Team t4">
                                            <h1>24+</h1>
                                            <p>Team advisor</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="part6_about">
                        <h1>Our Team</h1>
                        <div className="container-fluid p-5"> 
                            <div className="d-grid dg2">
                                <div className="part6_info_first">
                                    <h4>Our Team</h4>
                                    <h2>Meet Our Expert Team</h2>
                                    <br />
                                    <p>Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.</p>
                                    <br />
                                    <p>Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.</p>
                                    <br />
                                </div>
                                <div className="position-relative ttt tt1">
                                    <div className="img_part6">
                                        <img src={About4}/>
                                    </div>
                                    <div className="info_part6">
                                        <h3>H. Merinda</h3>
                                        <h4>CEO & Co-Founder</h4>
                                        <div className="icon_part6 d-flex align-items-center gap-2">
                                            <i class="fa-brands fa-facebook-f"></i>
                                            <i class="fa-brands fa-twitter"></i>
                                            <i class="fa-brands fa-instagram"></i>
                                            <i class="fa-brands fa-youtube"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="position-relative ttt tt2">
                                    <div className="img_part6">
                                        <img src={About5}/>
                                    </div>
                                    <div className="info_part6" >
                                        <h3>Dilan Specter</h3>
                                        <h4>Head Engineer</h4>
                                        <div className="icon_part6 d-flex align-items-center gap-2">
                                            <i class="fa-brands fa-facebook-f"></i>
                                            <i class="fa-brands fa-twitter"></i>
                                            <i class="fa-brands fa-instagram"></i>
                                            <i class="fa-brands fa-youtube"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default About;