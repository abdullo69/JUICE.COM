import React from 'react'
import Navbar from '../../Navbar/Navbar'
import "./Banner.scss"
import our from "../../../Static-data/StaticData2"
import Ready from '../Ready/Ready'
function Banner() {
    return (
        <div>
            <Navbar />
            <div className="banner">
                <div className="banner_navbar">
                    <h1>Our Ingredients and Their Potential Health Benefits</h1>
                </div>

                <div className="banner_carts">
                    {
                        our.map((our, inx) => {
                            return (
                                <div className="banner_cart">
                                    <img src={our.img} alt="" />
                                    <div className='banner_car'>
                                        <h1>{our.nomi}</h1>
                                        <p>{our.lorem}</p>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Ready />
        </div>
    )
}

export default Banner