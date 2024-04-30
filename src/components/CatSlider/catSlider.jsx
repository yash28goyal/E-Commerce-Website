import React, { useState ,useEffect } from "react";
import '../CatSlider/catSlider.css';
import Slider from 'react-slick';
import { Link } from "react-router-dom";

const CatSlider = (props)=>{

    const [catData,setCatData] = useState(props.data)
    const [totalLength, setTotalLength] = useState([]);

    const [itemBg,setitemBg] = useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec'
    ])
    const [windowWidth,setWindowWidth] = useState(window.innerWidth);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: windowWidth>1025 ? 10 : windowWidth<1025 && windowWidth>787 ? 6 : windowWidth<787 && windowWidth>426 ? 4 : 2,
        slidesToScroll: 1,
        fade:false,
        arrows:true,
        autoplay:2000,
        centerMode:true
    };

    var catLength = 0;
    var lengthArr = [];
    useEffect(() => {
        catData.length !== 0 &&
            catData.map((item, index) => {
                item.items.length !== 0 &&
                    item.items.map((item_) => {
                        catLength += item_.products.length
                    })
                lengthArr.push(catLength)
                catLength = 0;
            })

        const list = lengthArr.filter((item, index) => lengthArr.indexOf(item) === index);
        setTotalLength(list)


    }, []);


    return(
        <>
            <div className="catSliderSectionOfpage">
                <div className="container-fluid">
                    <h2 className="Hd">Featured Catergories</h2>
                    <Slider {...settings} className="Cat_Slider_Main">
                        {
                            catData.length!==0 &&
                            catData.map((item,index)=>{
                                return(
                                    <div className="item" key={index}>
                                        <Link to={`/cat/${item.cat_name.toLowerCase()}`}>
                                         <div className="info" style={{background:itemBg[index]}}>
                                             <img src={item.image} alt="" />
                                             <h1 className="text-capitalize mt-2">{item.cat_name}</h1>
                                             <p>{totalLength[index]}</p>
                                         </div>
                                         </Link>
                                     </div>
                                )
                            })
                        }
                        {
                            catData.length!==0 &&
                            catData.map((item,index)=>{
                                return(
                                    <div className="item" key={index}>
                                        <Link to={`/cat/${item.cat_name.toLowerCase()}`}>
                                         <div className="info" style={{background:itemBg[index]}}>
                                             <img src={item.image} alt="" />
                                             <h1 className="text-capitalize mt-2">{item.cat_name}</h1>
                                             <p>{totalLength[index]}</p>
                                         </div>
                                         </Link>
                                     </div>
                                )
                            })
                        }
                        {
                            catData.length!==0 &&
                            catData.map((item,index)=>{
                                return(
                                    <div className="item" key={index}>
                                        <Link to={`/cat/${item.cat_name.toLowerCase()}`}>
                                         <div className="info" style={{background:itemBg[index]}}>
                                             <img src={item.image} alt="" />
                                             <h1 className="text-capitalize mt-2">{item.cat_name}</h1>
                                             <p>{totalLength[index]}</p>
                                         </div>
                                         </Link>
                                     </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default CatSlider;