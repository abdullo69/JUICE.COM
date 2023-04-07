import React, { useState } from 'react'
import "./Navbar.scss"
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineBars } from "react-icons/ai"
import { FaBars, FaFacebookF, FaTimes } from "react-icons/fa"
import logo from "../images/logo.png"
import { BsSearch } from "react-icons/bs"
import { BiShoppingBag } from "react-icons/bi"
function Navbar() {
    const [isMobile, setIsMobile] = useState(false)
    const [scrollClick, setScrollClick] = useState(false)
    console.log(scrollClick)
    window.addEventListener('scroll', function () {
        console.log(window.scrollY)

        if (window.scrollY > 120) {
            setScrollClick(true)
        } else {
            setScrollClick(false)
        }
    })

    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }
    return (
        <div>
            <div className="navbar">
                <div className="nav_sub">
                    <p>Subscribe and save. Receive 10% off your order if you sign up for our subscription!</p>
                </div>

                <div className="navbar_logo">

                    <div className="icon">
                        <a href="#"><AiOutlineTwitter /></a>
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"> <AiOutlineInstagram /></a>
                    </div>

                    <img style={scrollClick ? { top: "-20px", left: "0", position: "fixed", zIndex: "3" } : { marginTop: "0px" }} src={logo} alt="" />

                    <div style={scrollClick ? { top: "0px", zIndex: "3", color: "black", position: "fixed", right: "0px", marginTop: "10px" } : { marginTop: "0px" }} className="icon2">
                        <a style={scrollClick ? { color: "black" } : { color: "#fff", }} href="#"><BsSearch /></a>
                        <a style={scrollClick ? { color: "black" } : { color: "#fff", }} href="#"><BiShoppingBag /></a>

                        <div className='menyu_icon' onClick={() => setIsMobile(!isMobile)}>
                            {isMobile ? (<FaTimes onClick={toggleModal} />) : (<FaBars onClick={toggleModal} />)}
                        </div>
                    </div>
                </div>

                <div style={scrollClick ? { position: "fixed", background: "#fff", color: "black", paddingLeft: "5px", top: 0, transition: "1s", zIndex: "2" } : { background: "unset" }} className="nav_text">
                    <ul className={isMobile ? "media" : ""}>
                        <li style={scrollClick ? { paddingLeft: "30px" } : { paddingLeft: "40px" }}>Home</li>
                        <li style={scrollClick ? { paddingLeft: "30px" } : { paddingLeft: "40px" }}>Our Story</li>
                        <li style={scrollClick ? { paddingLeft: "30px" } : { paddingLeft: "40px" }}>Our Ingredients</li>
                        <li style={scrollClick ? { paddingLeft: "30px" } : { paddingLeft: "40px" }}>Recipes</li>
                        <li style={scrollClick ? { paddingLeft: "30px" } : { paddingLeft: "40px" }}>Store Locator</li>
                        <li style={scrollClick ? { paddingLeft: "30px" } : { paddingLeft: "40px" }}>Shop</li>
                    </ul>
                </div>

                {
                    modal && (
                        <div style={scrollClick ? { position: "fixed" } : { position: "absolute" }} className="media_ul">
                            <ul>
                                <li>Home</li>
                                <li>Our Story</li>
                                <li>Our Ingredients</li>
                                <li>Recipes</li>
                                <li>Store Locator</li>
                                <li>Shop</li>
                            </ul>


                            <div style={{ marginTop: "20px", textDecoration: "undirline" }} className="icon">
                                <a href="#"><AiOutlineTwitter /></a>
                                <a href="#"><FaFacebookF /></a>
                                <a href="#"> <AiOutlineInstagram /></a>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar