import React from 'react';
import Slider from "react-slick";
import '../Slider/index.css';
import Slider1 from '../../../assets/images/slider-1.png'
import Slider2 from '../../../assets/images/slider-2.png'

const HomeSlider=()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        arrows:true
    };
    return(
        <section className="homeslider">
            <div className="container-fluid position-relative">
                <Slider {...settings} className='home_slider_Main'>
                    <div className="item">
                        <img src={Slider1} className='w-100 '/>
                        <div className="info">
                            <h1 className='mb-4'> 
                                Don’t miss amazing<br/>grocery deals
                            </h1>
                            <p>Sign up for the daily newsletter</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={Slider2} className='w-100'/>
                        <div className="info">
                            <h1 className='mb-4'> 
                                Fresh Vegetables<br/>Big Discount
                            </h1>
                            <p>Save uo to 50% off on your first order</p>
                        </div>
                    </div>
                </Slider>

            </div>
        </section>
    )
}

export default HomeSlider;