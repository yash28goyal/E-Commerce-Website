import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import './Contact.css'

const Contact = () => {
  return (
    <div className='container-fluid'>
        <div className="container-fluid my-4">
            <ul className="list list-inline">
                <li className="list-inline-item"><Link to='/'>Home / </Link></li>
                <li className="list-inline-item"><Link to='/contact' > Contact</Link></li>
            </ul>
        </div>
        <hr />
        <div className="container-fluid">
            <div className="container-fluid">
                <div className="d-grid dgc">
                    <div className="first dgcc">
                        <h4 className='text-g'>How can help you ?</h4>
                        <h1>Let us know how we can help you</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className="second dgcc">
                        <h2>01. Visit Feedback</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <h2>02. Billing Inquiries</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className="third dgcc">
                        <h2>03. Employer Services</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <h2>04.General Inquiries</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid g-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13748.91182690317!2d76.6528112!3d30.5145926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1714421302866!5m2!1sen!2sin"></iframe>
            </div>
            <div className="container-fluid">
                <div className="d-grid dgc1">
                    <div className="first1">
                        <h4>Office</h4>
                        <p>205 North Michigan Avenue, Suite 810</p>
                        <p>Chicago, 60601, USA</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: contact@Evara.com</p>
                        <Button className='btn-g btn-lg mt-4' ><span>View Map</span></Button>
                    </div>
                    <div className="second1">
                        <h4>Studio</h4>
                        <p>205 North Michigan Avenue, Suite 810</p>
                        <p>Chicago, 60601, USA</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: contact@Evara.com</p>
                        <Button className='btn-g btn-lg mt-4' ><span>View Map</span></Button>
                    </div>
                    <div className="third1">
                        <h4>Shop</h4>
                        <p>205 North Michigan Avenue, Suite 810</p>
                        <p>Chicago, 60601, USA</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: contact@Evara.com</p>
                        <Button className='btn-g btn-lg mt-4' ><span>View Map</span></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact