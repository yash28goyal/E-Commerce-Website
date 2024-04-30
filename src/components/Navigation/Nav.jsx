import React, { useEffect, useState } from 'react';
import '../Navigation/Nav.css';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView'
import {Link} from 'react-router-dom';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import IconCompare from '../../assets/images/icon-compare.svg'
import IconCart from '../../assets/images/icon-cart.svg'
import IconHeart from '../../assets/images/icon-heart.svg'
import IconUser from '../../assets/images/icon-user.svg'


const Nav = (props)=>{

    const [navData,setNavData] = useState([]);

    // console.log(navData)
    useEffect(()=>{
        setNavData(props.data)
    },[])
    return (
      <div className="nav d-flex align-items-center sticky">
        <div className="container-fluid">
          <div className="row position-relative">
          <ul className="list list-inline mb-0 headerIcons dff mt-4">
              <li className="list-inline-item ml-3"><span className='d-flex gap-2'><img src={IconCompare}/>Compare</span></li>
              <li className="list-inline-item ml-3"><span className='d-flex gap-2'><img src={IconHeart}/>Wishlist</span></li>
              <Link to={'/cart'}><li className="list-inline-item ml-3"><span className='d-flex gap-2'><img src={IconCart}/>Cart</span></li></Link>
             <Link to='/login'><li className="list-inline-item ml-3"><span className='d-flex gap-2'><img src={IconUser}/>Account</span></li></Link>
          </ul>
            <div className="col-sm-2 part1 d-flex align-items-center">
              <Button className="bg-g text-white tabs res-hide">
                <GridViewIcon />
                &nbsp;All Categories
                <KeyboardArrowDownIcon />
              </Button>
            </div>
            <div className="col-sm-8 part2 position-static">
              <nav>
                <ul className="list list-inline mb-0">
                  <li className="list-inline-item">
                    <Button>
                      <Link to="/">Home</Link>
                    </Button>
                  </li>

                  {navData.length !== 0 &&
                    navData.map((item, index) => {
                      return (
                        <li className="list-inline-item" key={index}>
                          <Button>
                            <Link to={`/cat/${item.cat_name.toLowerCase()}`}>
                              {item.cat_name}
                            </Link>
                            <KeyboardArrowDownIcon />
                          </Button>
                          {item.items.length !== 0 && (
                            <div className="dropdown_menupage">
                              <ul>
                                {item.items.map((item_, index_) => {
                                  return (
                                    <li key={index_}>
                                      <Button>
                                        <Link
                                          to={`/cat/${item.cat_name.toLowerCase()}/${item_.cat_name
                                            .replace(/\s/g, "-")
                                            .toLowerCase()}`}
                                        >
                                          {item_.cat_name}
                                        </Link>
                                      </Button>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          )}
                        </li>
                      );
                    })}

                  <li className="list-inline-item">
                    <Button>
                      <Link to="/about">About</Link>
                    </Button>
                  </li>
                  <li className="list-inline-item position-static">
                    <Button>
                      <Link>Mega menu</Link>
                      <KeyboardArrowDownIcon />
                    </Button>
                    <div className="dropdown_menupage megamenupage">
                      <div className="row">
                        {props.data.length !== 0 &&
                          props.data.map((item, index) => {
                            return (
                              <div className="col" key={index}>
                                <Link to={`/cat/${item.cat_name.toLowerCase()}`}>
                                  {" "}
                                  <h4 className="text-g text-capitalize">
                                    {item.cat_name}
                                  </h4>
                                </Link>
                                {item.items.length !== 0 && (
                                  <ul className="mt-4 mb-0">
                                    {item.items.map((item_, index_) => {
                                      return (
                                        <li key={index_}>
                                          <Link
                                            to={`/cat/${item.cat_name.toLowerCase()}/${item_.cat_name
                                              .replace(/\s/g, "-")
                                              .toLowerCase()}`}
                                          >
                                            {item_.cat_name}
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                )}
                              </div>
                            );
                          })}
                        <div className="col">
                          <img
                            src="https://nest-nextjs-13.vercel.app/assets/imgs/banner/banner-menu.png"
                            className="w-100 z-index"
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <Button>
                      <Link>Pages</Link>
                      <KeyboardArrowDownIcon />
                    </Button>
                    <div className="dropdown_menupage">
                      <ul>
                        <li>
                          <Button>
                            <Link to="/about">About Us</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to='/contact'>Contact</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to='/notfound'>My Account</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to='/login'>Login</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to='/register'>Register</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to='/notfound'>Purchase Guide</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to='/notfound'>Privacy Policy</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to='/notfound'>Terms of Service</Link>
                          </Button>
                        </li>
                        <li>
                          <Button>
                            <Link to='/notfound'>404 Page</Link>
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <Button>
                      <Link to='/contact'>Contact</Link>
                    </Button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-sm-2 part3 d-flex align-items-center">
              <div className="phno d-flex align-items-center ml-auto">
                <span>
                  <HeadsetMicOutlinedIcon />
                </span>
                <div className="info ml-3">
                  <h3 className="text-g mb-0">1900-888</h3>
                  <p className="mb-0">24/7 Support Center</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
}

export default Nav;