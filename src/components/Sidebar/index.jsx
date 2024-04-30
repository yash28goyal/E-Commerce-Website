import React from 'react'
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import BannerImg from '../../assets/images/banner1.jpg'

import { Button } from '@mui/material';

function valuetext(value) {
    return `${value}°C`;
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  

function SideBar() {
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
    <>
        <div className="sideBar">
            <div className="card border-0 shadow">
                <h2>Category</h2>
                <div className="catList">
                    <div className="catitems d-flex align-items-center">
                        <div className="img"><img src="https://nest-nextjs-13.vercel.app/assets/imgs/theme/icons/category-1.svg" width={30}/></div>
                        <h1 className='mb-0 ml-3 mr-3'>Milks & Dairies</h1>
                        <span className='d-flex align-items-center justify-content-center rounded-circle ml-auto'>30</span>
                    </div>
                    <div className="catitems d-flex align-items-center">
                        <div className="img"><img src="https://nest-nextjs-13.vercel.app/assets/imgs/theme/icons/category-1.svg" width={30}/></div>
                        <h1 className='mb-0 ml-3 mr-3'>Milks & Dairies</h1>
                        <span className='d-flex align-items-center justify-content-center rounded-circle ml-auto'>30</span>
                    </div>
                    <div className="catitems d-flex align-items-center">
                        <div className="img"><img src="https://nest-nextjs-13.vercel.app/assets/imgs/theme/icons/category-1.svg" width={30}/></div>
                        <h1 className='mb-0 ml-3 mr-3'>Milks & Dairies</h1>
                        <span className='d-flex align-items-center justify-content-center rounded-circle ml-auto'>30</span>
                    </div>
                    <div className="catitems d-flex align-items-center">
                        <div className="img"><img src="https://nest-nextjs-13.vercel.app/assets/imgs/theme/icons/category-1.svg" width={30}/></div>
                        <h1 className='mb-0 ml-3 mr-3'>Milks & Dairies</h1>
                        <span className='d-flex align-items-center justify-content-center rounded-circle ml-auto'>30</span>
                    </div>
                    <div className="catitems d-flex align-items-center">
                        <div className="img"><img src="https://nest-nextjs-13.vercel.app/assets/imgs/theme/icons/category-1.svg" width={30}/></div>
                        <h1 className='mb-0 ml-3 mr-3'>Milks & Dairies</h1>
                        <span className='d-flex align-items-center justify-content-center rounded-circle ml-auto'>30</span>
                    </div>
                </div>
            </div>
            <div className="card border-0 shadow">
                <h2>Fill By Price</h2>
                <Slider
                    min={0}
                    step={1}
                    max={1000}
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    color='success'
                />
                <div className="d-flex py-2">
                <span>From: <strong className='text-success'>${value[0]}</strong></span>
                <span className='ml-auto'>To: <strong className='text-success'>${value[1]}</strong></span>
                </div>   

                <div className="filters">
                    <h5>Color</h5>
                    <ul>
                        <li><Checkbox {...label} color='success'/>Red (50)</li>
                        <li><Checkbox {...label} color='success'/>Green (78)</li>
                        <li><Checkbox {...label} color='success'/>Blue (54)</li>
                        <li><Checkbox {...label} color='success'/>Yellow (60)</li>
                        <li><Checkbox {...label} color='success'/>Red (50)</li>
                        <li><Checkbox {...label} color='success'/>Green (78)</li>
                        <li><Checkbox {...label} color='success'/>Blue (54)</li>
                        <li><Checkbox {...label} color='success'/>Yellow (60)</li>
                        <li><Checkbox {...label} color='success'/>Red (50)</li>
                        <li><Checkbox {...label} color='success'/>Green (78)</li>
                        <li><Checkbox {...label} color='success'/>Blue (54)</li>
                        <li><Checkbox {...label} color='success'/>Yellow (60)</li>
                        <li><Checkbox {...label} color='success'/>Red (50)</li>
                        <li><Checkbox {...label} color='success'/>Green (78)</li>
                        <li><Checkbox {...label} color='success'/>Blue (54)</li>
                        <li><Checkbox {...label} color='success'/>Yellow (60)</li>
                    </ul>
                    
                </div>

                <div className="filters mt-0">
                    <h5>Item Condition</h5>
                    <ul>
                        <li><Checkbox {...label} color='success'/>New (1506)</li>
                        <li><Checkbox {...label} color='success'/>Refurbished (27)</li>
                        <li><Checkbox {...label} color='success'/>Used (45)</li>
                        <li><Checkbox {...label} color='success'/>Taps (506)</li>
                        <li><Checkbox {...label} color='success'/>New (1506)</li>
                        <li><Checkbox {...label} color='success'/>Refurbished (27)</li>
                        <li><Checkbox {...label} color='success'/>Used (45)</li>
                        <li><Checkbox {...label} color='success'/>Taps (506)</li>
                        <li><Checkbox {...label} color='success'/>New (1506)</li>
                        <li><Checkbox {...label} color='success'/>Refurbished (27)</li>
                        <li><Checkbox {...label} color='success'/>Used (45)</li>
                        <li><Checkbox {...label} color='success'/>Taps (506)</li>
                        <li><Checkbox {...label} color='success'/>New (1506)</li>
                        <li><Checkbox {...label} color='success'/>Refurbished (27)</li>
                        <li><Checkbox {...label} color='success'/>Used (45)</li>
                        <li><Checkbox {...label} color='success'/>Taps (506)</li>
                    </ul>
                </div>    

                <div className='d-flex'>
                    <Button className='btn btn-g mt-3'><FilterAltOutlinedIcon/> Filters</Button>  
                </div>
            </div>
            <br />
            <img src={BannerImg} />
        </div>
    </>
  )
}

export default SideBar;