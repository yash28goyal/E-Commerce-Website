import React from "react";
import '../Banner/Banner.css';
import Banner1 from '../../assets/images/banner1.jpg'
import Banner2 from '../../assets/images/banner2.jpg'
import Banner3 from '../../assets/images/banner3.jpg'

const Banner = ()=>{
    return(
        <>
            <div className="BannerSection">
                <div className="container-fluid d-flex gap-2">
                        <div className="col">
                            <div className="box radius">
                                <img src={Banner1} className="w-100 transition radius" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="box radius">
                                <img src={Banner2} className="w-100 transition radius" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="box radius">
                                <img src={Banner3} className="w-100 transition radius" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="box radius">
                                <img src={Banner1} className="w-100 transition radius" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="box radius">
                                <img src={Banner2} className="w-100 transition radius" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="box radius">
                                <img src={Banner3} className="w-100 transition radius" />
                            </div>
                        </div>
                        
                    </div>
                </div>
        </>
    )
}

export default Banner; 