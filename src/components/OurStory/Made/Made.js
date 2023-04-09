import React from 'react'
import rogstar from "../../../images/rogstar.avif"
import Swiper from '../../OurStory/Swiper/Swiper'
function Made() {
    return (
        <div>
            <div className='from'>
                <div className="from_text">
                    <h1 style={{ color: "aqua" }}>
                        JUST MADE. MADE JUSTLY.™</h1>
                    <p>Growing up on a farm in middle America taught me about hard work and how global agricultural markets function. In the agricultural value chain, farmers typically receive the least amount for their produce.</p>
                    <div className="from_btn"></div>

                </div>
                <div className='from_images'>
                    <div className='from_img'>
                        <img src={rogstar} alt="" />
                    </div>
                </div>
            </div>
            <Swiper />
        </div>
    )
}

export default Made