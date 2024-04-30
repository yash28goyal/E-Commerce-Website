import React, { useRef, useState , useEffect } from 'react';
import './Detail.css'
import { Link, useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Slider from 'react-slick';
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';

function Details(props) {
  // const [zoomImage,setzoomImage] = useState('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg')
  const [bigSize,setbigSize] = useState([1500,1500]);
  const [smlSize,setsmlSize] = useState([150,150]);

  const [activeSize,setActiveSize] = useState(0);
  const [activeTab,setActiveTab] = useState(0);
  
  const [currentProduct, setCurrentProduct] = useState({})
  
  const zoomSlider = useRef()
  let { id } = useParams();
  
  // const [inputValue,setInputValue] = useState(1);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade:false,
    arrows:true,
    autoplay:3000
  };
  var related = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade:false,
    arrows:false,
    autoplay:3000
  };
  
  const goto=(url,index)=>{
    setzoomImage(url);
    zoomSlider.current.slickGoTo(index);
  }

  const isActive = (index)=>{
    setActiveSize(index);
  }


  useEffect(() => {
    window.scrollTo(0,0);
    props.data.length !== 0 &&
        props.data.map((item) => {
            item.items.length !== 0 &&
                item.items.map((item_) => {
                    item_.products.length !== 0 &&
                        item_.products.map((product) => {
                            if (parseInt(product.id) === parseInt(id)) {
                                setCurrentProduct(product);
                            }
                        })
                })
        })
  },[id]);
  return (
    <>
      <section className="DetailsPage mb-5">
        <div className="breadcrumbWrapper mt-1">
          <div className="container-fluid">
            <ul className="breadcrumb breadcrumb2">
              <li><Link to={'/'}>Home</Link></li>
              <li>{currentProduct.productName}</li>
            </ul>
          </div>
        </div>
      
        <div className="container-fluid details_container">
            <div className="row dd">
                      <div className="col-md-5 productimg">
                        <div className="productZoom" ref={zoomSlider}>
                          <InnerImageZoom zoomType='hover' zoomScale={1}
                          src={`${currentProduct.catImg}?im=Resize=(${bigSize[0]},${bigSize[1]})`}/>
                        </div>
                        <Slider {...settings} className='ZoomSlider'>
                          {
                            currentProduct.productImages!==undefined &&
                            currentProduct.productImages.map((imgUrl,index)=>{
                                return(
                                  <div className="items" key={index}>
                                    <img src={`${imgUrl}?im=Resize=(${smlSize[0]},${smlSize[1]})`} className='w-100' onClick={()=>goto(`${imgUrl}`,0)}/>
                                  </div>
                                )
                            })
                          }
                        </Slider>
                      </div>
                      <div className="col-md-7 productInfo">
                          <h1>{currentProduct.productName}</h1>
                          <div className="d-flex align-items-center mb-4">
                            <Rating name="read-only" value={currentProduct.rating} precision={0.5} readOnly />
                            <span className="text-g">({currentProduct.rating})</span>
                          </div>

                          <div className="priceSec d-flex align-items-center mb-3">
                            <span className='text-g pricelarge'>Rs. {currentProduct.price}</span>
                            <div className="ml-2 d-flex flex-column">
                              <span className="text-o">{currentProduct.discount}% OFF</span>
                              <span className="text-light">Rs. {currentProduct.oldPrice}</span>
                            </div>
                          </div>
                          <p>{currentProduct.description}</p>
        
                          <div className="productSize d-flex align-items-center">
                            <span>Size / Weight: </span>
                            <ul className="list list-inline">
                              {
                                currentProduct.weight !== undefined &&
                                currentProduct.weight.map((item,index__)=>{
                                  return(
                                    <li className="list-inline-item" key={index__}><Link className={`tag ${activeSize===0 ? 'active': ''}`} onClick={()=>{isActive(0)}}>{item}g</Link></li>
                                  )
                                })
                              }
                              {
                                currentProduct.SIZE !== undefined &&
                                currentProduct.SIZE.map((item_,index_)=>{
                                  return(
                                    <li className="list-inline-item" key={index_}><Link className={`tag ${activeSize===0 ? 'active': ''}`} onClick={()=>{isActive(0)}}>{item_}</Link></li>
                                  )
                                })
                              }
                            </ul>
                          </div>

                          <div className="addToCartSection pt-4 pb-4 d-grid align-items-center">
                              <Button className='btn-g btn-l' onClick={()=>{
                                props.addToCart(currentProduct)
                              }
                              }><ShoppingCartOutlinedIcon/> Add To Cart</Button>
                              <Button className='btn-border'><FavoriteBorderOutlinedIcon/></Button>
                              <Button className='btn-border'><CompareArrowsOutlinedIcon/></Button>
                          </div>

                      </div>
            </div>

            <div className="card mt-5 p-5 detailsPageTabs">
              <div className="custom_tabs">
                  <ul className="list list-inline">
                    <li className="list-inline-item">
                      <Button className={`${activeTab===0 && 'active'}`} onClick={()=>{setActiveTab(0)}}>Description</Button>
                    </li>
                    <li className="list-inline-item">
                      <Button className={`${activeTab===1 && 'active'}`} onClick={()=>{setActiveTab(1)}}>Additional Info</Button>
                    </li>
                    <li className="list-inline-item">
                      <Button className={`${activeTab===2 && 'active'}`} onClick={()=>{setActiveTab(2)}}>Reviews (3)</Button>
                    </li>
                  </ul>
                  <br />

                {
                  activeTab===0 && 
                  <div className="Tabs_Content">
                    <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.</p>
                    <p>Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.</p>
                    <br />
                    <h2>Packaging & Delivery</h2>
                    <br />
                    <hr />
                    &nbsp;
                    <p>Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.</p>
                    <br />
                    <p>Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.</p>
                    <br />
                    <h2>Related products</h2>
                    <br />
                    <hr />
                    &nbsp;
                    <p>Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.</p>
                    <br />
                    <p>Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.</p>
                  </div>
                }

                {
                  activeTab===1 &&
                  <div className="Tabs_Content">
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <tbody>
                          <tr class="stand-up">
                            <th>Stand Up</th>
                            <td><p>Dimensions: 35″L x 24″W x 37-45″H (front to back wheel)</p></td>
                          </tr>
                          <tr class="folded-wo-wheels">
                            <th>Folded (w/o wheels)</th>
                            <td><p>Dimensions: 32.5″L x 18.5″W x 16.5″H</p></td>
                          </tr>
                          <tr class="folded-w-wheels">
                            <th>Folded (w/ wheels)</th>
                            <td><p>Dimensions: 32.5″L x 24″W x 18.5″H</p></td>
                          </tr>
                          <tr class="door-pass-through">
                            <th>Door Pass Through</th>
                            <td><p>Width: 24″</p></td>
                          </tr>
                          <tr class="frame">
                            <th>Frame</th>
                            <td><p>Material: Aluminum</p></td>
                          </tr>
                          <tr class="weight-wo-wheels">
                            <th>Weight (w/o wheels)</th>
                            <td><p>20 LBS</p></td>
                          </tr>
                          <tr class="weight-capacity">
                            <th>Weight Capacity</th>
                            <td><p>60 LBS</p></td>
                          </tr>
                          <tr class="width">
                            <th>Width</th>
                            <td><p>24″</p></td>
                          </tr>
                          <tr class="handle-height-ground-to-handle">
                            <th>Handle height (ground to handle)</th>
                            <td><p>37-45″</p></td>
                          </tr>
                          <tr class="wheels">
                            <th>Wheels</th>
                            <td><p>Size: 12″, Type: Air / Wide track slick tread</p></td>
                          </tr>
                          <tr class="seat-back-height">
                            <th>Seat back height</th>
                            <td><p>21.5″</p></td>
                          </tr>
                          <tr class="head-room-inside-canopy">
                            <th>Head room (inside canopy)</th>
                            <td><p>25″</p></td>
                          </tr>
                          <tr class="pa_color">
                            <th>Color</th>
                            <td><p>Options: Black, Blue, Red, White</p></td>
                          </tr>
                          <tr class="pa_size">
                            <th>Size</th>
                            <td><p>Options: M, S</p></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                }

                {
                  activeTab===2 && 
                  <div className="Tabs_Content">
                    <div className="row">
                      <div className="col-md-8">
                        <h3>Customer questions & answers</h3>
                        <br />
                        <div className="card p-3 reviewsCards flex-row">
                          <div className="image">
                            <div className="rounded-circle">
                              <img src="https://nest-nextjs-13.vercel.app/assets/imgs/blog/author-2.png" />
                            </div>
                            <span className='text-g font-weight-bold d-block text-center'>Jacky Chan</span>
                          </div>
                          <div className="review_info pl-5">
                            <div className="d-grid align-items-center">
                              <h5 className='text-light'>December 4, 2020 at 3:12 pm</h5>
                              <div className="ml-auto">
                                <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                              </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nisi eius accusantium similique molestiae doloribus cupiditate alias consequuntur placeat quibusdam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, unde.</p>
                          </div>
                        </div>
                        <div className="card p-3 reviewsCards flex-row">
                          <div className="image">
                            <div className="rounded-circle">
                              <img src="https://nest-nextjs-13.vercel.app/assets/imgs/blog/author-3.png" />
                            </div>
                            <span className='text-g font-weight-bold d-block text-center'>Ana Rosie</span>
                          </div>
                          <div className="review_info pl-5">
                            <div className="d-grid align-items-center">
                              <h5 className='text-light'>December 4, 2020 at 3:12 pm</h5>
                              <div className="ml-auto">
                                <Rating name="read-only" value={4} precision={0.5} readOnly />
                              </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nisi eius accusantium similique molestiae doloribus cupiditate alias consequuntur placeat quibusdam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, unde.</p>
                          </div>
                        </div>
                        <div className="card p-3 reviewsCards flex-row">
                          <div className="image">
                            <div className="rounded-circle">
                              <img src="https://nest-nextjs-13.vercel.app/assets/imgs/blog/author-4.png" />
                            </div>
                            <span className='text-g font-weight-bold d-block text-center'>Steven Keny</span>
                          </div>
                          <div className="review_info pl-5">
                            <div className="d-grid align-items-center">
                              <h5 className='text-light'>December 4, 2020 at 3:12 pm</h5>
                              <div className="ml-auto">
                                <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                              </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nisi eius accusantium similique molestiae doloribus cupiditate alias consequuntur placeat quibusdam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, unde.</p>
                          </div>
                        </div>
                        <div className="card p-3 reviewsCards flex-row">
                          <div className="image">
                            <div className="rounded-circle">
                              <img src="https://nest-nextjs-13.vercel.app/assets/imgs/blog/author-1.png" />
                            </div>
                            <span className='text-g font-weight-bold d-block text-center'>Stephen</span>
                          </div>
                          <div className="review_info pl-5">
                            <div className="d-grid align-items-center">
                              <h5 className='text-light'>December 4, 2020 at 3:12 pm</h5>
                              <div className="ml-auto">
                                <Rating name="read-only" value={5} precision={0.5} readOnly />
                              </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nisi eius accusantium similique molestiae doloribus cupiditate alias consequuntur placeat quibusdam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, unde.</p>
                          </div>
                        </div>

                        <br /><br />

                        <form className='reviewForm'>
                          <h4>Add a review</h4>
                          <div className="form-group">
                            <textarea className='form-control' placeholder='Write Comment'></textarea>
                          </div>

                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <input type="text" className='form-control' placeholder='Name'/>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <input type="text" className='form-control' placeholder='Email'/>
                              </div>
                            </div>
                          </div>

                          <div className="form-group">
                            <input type="text" className='form-control' placeholder='Website' />
                          </div>

                          <div className="form-group">
                            <Button className="btn-g btn-lg">Submit Review</Button>
                          </div>

                        </form>


                      </div>
                      <div className="col-md-4 pl-5">
                        <h3>Customer reviews</h3>

                        <div className="mt-2 d-flex align-items-center">
                          <Rating name="read-only" value={4.5} precision={0.5} readOnly />
                          <strong className='ml-3'>4.5 out of 5</strong>
                        </div>

                        <br />

                        <div className="ProgressBarBox d-flex align-items-center">
                          <span className='mr-3'>5 Star</span>
                          <div className="progress" style={{width:'85%',height:'20px'}}>
                            <div className="progress-bar" style={{width:'50%',height:'20px'}}>50%</div>
                          </div>
                        </div>
                        <div className="ProgressBarBox d-flex align-items-center">
                          <span className='mr-3'>4 Star</span>
                          <div className="progress" style={{width:'85%',height:'20px'}}>
                            <div className="progress-bar" style={{width:'25%',height:'20px'}}>25%</div>
                          </div>
                        </div>
                        <div className="ProgressBarBox d-flex align-items-center">
                          <span className='mr-3'>3 Star</span>
                          <div className="progress" style={{width:'85%',height:'20px'}}>
                            <div className="progress-bar" style={{width:'45%',height:'20px'}}>45%</div>
                          </div>
                        </div>
                        <div className="ProgressBarBox d-flex align-items-center">
                          <span className='mr-3'>2 Star</span>
                          <div className="progress" style={{width:'85%',height:'20px'}}>
                            <div className="progress-bar" style={{width:'65%',height:'20px'}}>65%</div>
                          </div>
                        </div>
                        <div className="ProgressBarBox d-flex align-items-center">
                          <span className='mr-3'>1 Star</span>
                          <div className="progress" style={{width:'85%',height:'20px'}}>
                            <div className="progress-bar" style={{width:'85%',height:'20px'}}>85%</div>
                          </div>
                        </div>

                        <br />

                        <p>How are ratings calculating?</p>
                      </div>
                    </div>
                  </div>
                }

              </div>
            </div>
        </div>
      </section>   
    </>
  )
}

export default Details;