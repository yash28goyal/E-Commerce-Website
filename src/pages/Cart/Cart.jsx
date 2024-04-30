import React from 'react';
import { useState } from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Rating from '@mui/material/Rating';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import Quantity from '../../components/QuantityBox/Quantity';



const Cart = (props) => {
    const [inputValue,setInputValue] = useState(1);
    const plus = ()=>{
        setInputValue(inputValue+1);
    }
    const minus = ()=>{
        if(inputValue!==1){
            setInputValue(inputValue-1);
        }
    }
    const [Cost,setTotalCost] = useState(0);
  return (
    <>
        <div className="breadcrumbWrapper mt-1">
          <div className="container-fluid">
            <ul className="breadcrumb breadcrumb2">
              <li><Link to={'/'}><HomeIcon/>Home</Link></li>
              <li><Link><CurrencyRupeeIcon/>Shop</Link></li>
              <li>< AddShoppingCartIcon/>Cart</li>
            </ul>
          </div>
        </div>
        <section className="container-fluid cart_section mb-5">
            <div className="container-fluid">
                <div className="d-grid dgggg">
                    <div className="bbbb px-4">
                        <div className="d-flex align-items-center w-100">
                            <div className="left">
                                <div className="Hd mb-0">Your Cart</div>
                                <p className='font-bold'>There are <span className="text-g">3</span> products in your cart</p>
                            </div>
                            <span className='clearcart ml-auto text-g cursor'><DeleteIcon className='mb-1'/>Clear Cart</span>
                        </div>
                        <div className="cartWrapper mt-4">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Unit Price</th>
                                            <th>Quantity</th>
                                            <th>SubTotal</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            props.cartArray.map((item,index)=>{
                                                console.log(item.price);
                                                item.price.replace()
                                                return(
                                                    <tr key={index}>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="imgg">
                                                                    <img src={item.catImg} className='w-100' />
                                                                </div>
                                                                <div className="infoo pl-4">
                                                                    <Link><h4>{item.productName}</h4></Link>
                                                                    <Rating name="read-only" value={item.rating} precision={0.5} readOnly />({item.rating})
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td><span>Rs {item.price}</span></td>
                                                        <td>
                                                            <Quantity value={inputValue} plus={plus} minus={minus}/>
                                                        </td>
                                                        <td><span className='text-g'>Rs {item.price*inputValue}</span></td>
                                                        <td><span className="cursor"><DeleteIcon className='mb-1'/></span></td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        
                                    </tbody>
                                </table>
                                
                            </div>
                        </div>
                    </div>
                    <div className="bgbbg pl-5 px-4">
                        <div className="card p-4 shadow cartright">
                            <div className="d-flex align-items-center mb-2">
                                <h5 className='mb-0 text-light'>Subtotal</h5>
                                <h3 className='ml-auto mb-0'><span className="text-g">Rs. {Cost}</span></h3>
                            </div>
                            <hr />
                            <div className="d-flex align-items-center my-3">
                                <h5 className='mb-0 text-light'>Shipping</h5>
                                <h3 className='ml-auto mb-0'><span className="text-g">Free</span></h3>
                            </div>
                            <hr />
                            <div className="d-flex align-items-center my-3">
                                <h5 className='mb-0 text-light'>Estimate</h5>
                                <h3 className='ml-auto mb-0'>United Kingdom</h3>
                            </div>
                            <hr />
                            <div className="d-flex align-items-center my-3">
                                <h5 className='mb-0 text-light'>Total</h5>
                                <h3 className='ml-auto mb-0'><span className="text-g">Rs. {Cost}</span></h3>
                            </div>
                            <Button className="btn-g btn-lg">Proceed to Checkout</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Cart