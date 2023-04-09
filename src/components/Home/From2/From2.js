import React from 'react'
import "./From2.scss"
import image from "../../../images/image.webp"
import Browse from '../Browse/Browse'
function From2() {
    return (
        <div>
            <div className='from'>


                <div className="from_text">
                    <h1 style={{ fontSize: "20px" }}>
                        WHAT ARE FUNCTIONAL INGREDIENTS?</h1>
                    <p>Functional ingredients have been used for centuries to treat and improve health conditions. Their “functionality” comes from having additional health benefits beyond their nutritional value. You want products that blend function, nutrition, and taste. So, we take the healing power of plants, blend them with vibrant, refreshing flavors and create out of this world cold pressed juices that fortify your body (and taste just as good).</p>
                    <p>Escape the Ordinary.</p>
                    <div className="from_btn"></div>

                </div>
                <div className='from_images'>
                    <div className='from_img'>
                        <img src={image} alt="" />
                    </div>
                </div>

            </div>
            <Browse />
        </div>
    )
}

export default From2