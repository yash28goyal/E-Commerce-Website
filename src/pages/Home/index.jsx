import React, { useState , useEffect } from "react";
import SliderBanner from "./Slider/index";
import CatSlider from "../../components/CatSlider/catSlider";
import Banner from "../../components/Banner/Banner";
import Slider from 'react-slick';

import './style.css'
import Product from '../../components/Product/product';
import TopProduct from '../../components/TopProducts/index';

import Banner4 from '../../assets/images/banner4.jpg'
import { Link } from "react-router-dom";

const Home=(props)=>{

    const [prodData, setprodData] = useState(props.data)
    const [catArray, setcatArray] = useState([])
    const [activeTab, setactiveTab] = useState();
    const [activeTabIndex, setactiveTabIndex] = useState(0);
    const [activeTabData, setActiveTabData] = useState([]);

    const [bestSells, setBestSells] = useState([]);

    const catArr = [];

    useEffect(() => {

        prodData.length !== 0 &&
            prodData.map((item) => {
                // console.log(item)
                item.items.length !== 0 &&
                item.items.map((item_) => {
                        // console.log(item_)
                        catArr.push(item_.cat_name);
                })
                // console.log(catArr);
            })

        const list2 = catArr.filter((item, index) => catArr.indexOf(item) === index);
        setcatArray(list2)

        setactiveTab(list2[0])

    }, [])

    useEffect(() => {
        var arr = [];
        setActiveTabData(arr);
        prodData.length !== 0 &&
            prodData.map((item, index) => {
                item.items.map((item_, index_) => {
                    if (item_.cat_name === activeTab) {
                        {
                            item_.products.length !== 0 &&
                                item_.products.map((product) => {
                                    arr.push({ ...product, parentCatName: item.cat_name, subCatName: item_.cat_name })
                                })

                            setActiveTabData(arr)
                        }
                    }
                })

            })

    }, [activeTab, activeTabData])


    const bestSellsArr = [];

    useEffect(() => {
        prodData.length !== 0 &&
            prodData.map((item) => {
                if (item.cat_name === "Groceries") {
                    item.items.length !== 0 &&
                        item.items.map((item_) => {
                            item_.products.length !== 0 &&
                                item_.products.map((product, index) => {
                                    bestSellsArr.push(product);
                                })
                        })
                }

            });


        setBestSells(bestSellsArr);

    }, [])

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade:false,
        arrows:true,
        autoplay: 3000
    };
    var setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade:false,
        arrows:false,
        autoplay: 3000
    };
    return(
        <>
            <SliderBanner/>
            <CatSlider data={prodData}/>
            <Banner/>

            <section className="Home_Product">
                <div className="container-fluid">
                    <div className="d-flex align-items-center Home_ProductsTitleWrap ">
                        <h2 className="Hd">Popular Products</h2>
                        <ul className="list list-inline ml-auto Ul-Items">
                            {
                                catArray.length !== 0 &&
                                catArray.map((cat, index) => {
                                    return (
                                        <li  key={index} className="list list-inline-item">
                                            <Link className={`cursor text-capitalize
                                                ${activeTabIndex === index ? 'act' : ''}`}
                                                onClick={() => {
                                                    setactiveTab(cat)
                                                    setactiveTabIndex(index);
                                                    // productRow.current.scrollLeft=0;
                                                    // setIsLoadingProducts(true);
                                                }}
                                            >
                                                {cat}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className="ProductRow">
                        {
                            activeTabData.length !== 0 &&
                            activeTabData.map((item, index) => {
                                return (
                                    <div className='ProductItem productitem' key={index}>

                                        <Product tag={item.type} item={item} addToCart={props.addToCart} />
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </section>

            <section className="Home_Product Home_Product_Row2">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <h2 className="Hd mb-0 mt-0">Daily Best Sells</h2>
                    </div>

                    <div className="row">
                        <div className="col-md-3 p-4 bannerDiv">
                            <img src={Banner4} className="banner4 w-100" />
                        </div>
                        <div className="col-md-9 p-4 dataDiv">

                            <Slider {...setting} className="prodSlider">
                                {
                                    bestSells.length !== 0 &&
                                    bestSells.map((item, index) => {
                                        return (
                                            <div className='prodSliderItems' key={index}>
                                                <Product tag={item.type} item={item} className="ppp" addToCart={props.addToCart}/>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>

            <section className="topProductsSection">
                <div className="container-fluid d-flex tth">
                        <div className="col tt">
                            <TopProduct title="Top Sellings"/>
                        </div>
                        <div className="col tt">
                            <TopProduct title="Trending Products"/>
                        </div>
                        <div className="col tt">
                            <TopProduct title="Recently added"/>
                        </div>
                        <div className="col tt">
                            <TopProduct title="Top Rated"/>
                        </div>
                </div>
            </section>
        </>
    )
}

export default Home;