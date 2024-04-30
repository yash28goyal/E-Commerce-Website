import { useEffect, useState , createContext} from 'react'
import './App.css'
import './Responsive.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header/header'

import Home from './pages/Home/index'
import About from './pages/About/index'
import Listing from './pages/Listing/Listing'
import Footer from './components/footer/footer'
import NotFound from './pages/NotFound/NotFound'
import Details from './pages/Details/Detail'
import Cart from './pages/Cart/Cart'
import Contact from './pages/Contact/Contact'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import axios from 'axios';


function App() {


  const [productData,setProductData] = useState([])

  useEffect(()=>{
    getData('../db.json');
  },[]);

  const getData = async(e)=>{
    try{
      await axios.get(e).then((response)=>{
      // console.log(response.data.productData);
      setProductData(response.data.productData);
      })
    }catch(error){
      console.log(error.message);
    }

  }
  const [cartArray,setCartArray] = useState([])
  const addToCart = (datae)=>{
    if(!cartArray.includes(datae)){
      setCartArray([...cartArray,datae])
    }
    // console.log(cartArray);
  }
  return (
    productData.length!==0 &&
    <BrowserRouter>
      <Header data={productData} cartArray={cartArray}/>
      <Routes>
        <Route exact={true} path="/" element={<Home data={productData} addToCart={addToCart} />} />
        <Route exact={true} path='/cat/:id' element={<Listing data={productData} single={true} addToCart={addToCart}/>}/>
        <Route exact={true} path='/cat/:other/:id' element={<Listing data={productData} single={false} addToCart={addToCart}/>}/>
        <Route exact={true} path="/about" element={<About/>} />
        <Route exact={true} path="/product/:id" element={<Details data={productData} addToCart={addToCart}/>} />
        <Route exact={true} path="/cart" element={<Cart data={productData} cartArray={cartArray }/>} />
        <Route exact={true} path="/contact" element={<Contact/>} />
        <Route exact={true} path="/login" element={<Login/>} />
        <Route exact={true} path="/register" element={<Register/>} />
        <Route exact={true} path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

