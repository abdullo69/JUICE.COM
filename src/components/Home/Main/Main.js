import React from 'react'
import Navbar from "../../Navbar/Navbar"
import "./Main.scss"
import video from "../../../images/video.mp4"
import Deli from '../Deli/Deli'
function Main() {
    return (
        <div>
            <div className='main'>
                <Navbar />
                <video muted autoPlay loop className='video'>
                    <source src={video} type="video/mp4" />
                </video>

                <div className="main_text">
                    <h1>ESCAPE THE ORDINARY</h1>
                    <button>SHOP NOW</button>
                </div>

            </div>
            <Deli />
        </div>
    )
}

export default Main