import React from 'react'
import Navbar from "../../Navbar/Navbar"
import Shop_cart from '../Shop_cart/Shop_cart'
import "./All.scss"
function All() {
    return (
        <div>
            <Navbar />
            <div className="all">
                <div className="all_text">
                    <h1>Shop All Juices</h1>
                    <p>Just Made. Made Justly.™ Select your favorite juices to customize your own bundle. Include 8 bottles per box.
                        If you are experiencing an issue with your order, please contact Customer Support at 855-456-JUST (5878) or at hello@justmadejuice.com</p>
                </div>
            </div>
            <Shop_cart />
        </div>
    )
}

export default All