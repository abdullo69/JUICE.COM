import React from 'react'
import "./From.scss"
import img from "../../../images/img.webp"
import Tropic_cart from '../Tropic_cart/Tropic_cart'
function From() {
    return (
        <div>
            <div className='from'>
                <div className='from_images'>
                    <div className='from_img'>
                        <img src={img} alt="" />
                    </div>
                </div>

                <div className="from_text">
                    <h1>
                        From the vine to your bottle</h1>
                    <p>
                        We’ve made it our mission to blend culture, quality, and experience – the Just Made way. Blending memories of drinking fresh juices at home in Nicaragua, purpose-led farming partnerships and premium, nutritious ingredients, we’re on a mission to create products that deliver an unforgettable experience.</p>
                    <p>Escape the Ordinary.</p>
                    <div className="from_btn"></div>
                </div>

            </div>
            <Tropic_cart />
        </div>
    )
}

export default From