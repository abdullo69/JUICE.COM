import React from 'react'
import "./Footer.scss"
import { FaFacebookF } from "react-icons/fa"
import { BsInstagram, BsTelephone, BsTwitter } from "react-icons/bs"
function Footer() {
    return (
        <div>
            <div className='footer'>
                <div className="footer_cart">
                    <h1>CONTACT</h1>
                    <p>Email Us</p>
                    <p>(855) 456-JUST</p>
                    <p>4500 N.Sam Houston Pkwy West</p>
                    <p>Suite #120</p>
                    <p>Houston, TX 77086</p>
                </div>

                <div className="footer_cart">
                    <h1>MENU</h1>
                    <p>Shop Juices</p>
                    <p>Ingredients</p>
                    <p>Store Locator</p>
                    <p>Recipes</p>
                    <p>Terms of Services & Privacy Policy</p>
                </div>

                <div className="sign">
                    <h1>SIGN UP</h1>

                    <div className="int">
                        <input type="text" placeholder='Enter your email' />
                        <button>I WANT TO WIN FREE JUICE!</button>
                    </div>
                </div>
            </div>
            <div className="footer_mini">
                <p>© 2023 Just Made. Website designed by Brand & Bloom.</p>
                <div className='footer_icons'>
                    <p><BsTwitter /></p>
                    <p><FaFacebookF /></p>
                    <p><BsInstagram /></p>
                    <p><BsTelephone /></p>
                </div>
            </div>
        </div>
    )
}

export default Footer