import React from "react";
import './style.css'
import SendIcon from '@mui/icons-material/Send';
import { Button } from "@mui/material";

const BigNews = ()=>{
    return(
        <>
            <div className="newsLetterBanner">
                <div className="button_send">
                    <SendIcon/>
                </div>
                <input type="text" placeholder='Your Email Address' />
                <Button className="subscribe_button">Subscribe</Button>
             </div>
        </>
    )
}

export default BigNews;