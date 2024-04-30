import React from "react";
import './NotFound.css';
import Button from '@mui/material/Button'
import { Link } from "react-router-dom";
import NotFoundImg from '../../assets/images/page-404.png';

export default function NotFound() {
  return (
    <>
        <section className="notFound">
            <div className="container-fluid">
                <div className="box">
                    <img src={NotFoundImg} className="not_img" />
                    <br /> 
                    <h1>Page Not Found</h1>
                    <br />
                    <p>The link you clicked may be broken or the page may have been removed.visit the Homepage or Contact us about the problem</p>
                    <br />
                    <div className="d-flex">
                        <Button className="btn-g btn-lg"><Link to={"/"}>Back To Home Page</Link></Button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
