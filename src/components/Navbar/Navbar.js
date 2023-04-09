import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineBars } from "react-icons/ai"
import { FaBars, FaFacebookF, FaTimes } from "react-icons/fa"
import logo from "../../images/logo.png"
import { BsSearch } from "react-icons/bs"
import { BiShoppingBag } from "react-icons/bi"
import { useLocation } from 'react-router-dom'
function Navbar() {
    const [isMobile, setIsMobile] = useState(false)
    const [scrollClick, setScrollClick] = useState(false)
    const [getColor, setColor] = useState(false)
    // console.log(scrollClick)

    useEffect(() => {
        window.addEventListener('scroll', function () {
            console.log(window.scrollY)

            if (window.scrollY > 120) {
                setScrollClick(true)
            } else {
                setScrollClick(false)
            }
        })
    }, [window.scrollY])


    const location = useLocation().pathname
    console.log(getColor)
    useEffect(() => {

        if (location !== "/" && "/juice.com") {
            setColor(true)
        } else {
            setColor(false)
        }


    }, [location])


    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }
    return (
        <div>
            <div className={`navbar ${getColor ? "black" : ""} `}>
                <div className="nav_sub">
                    <p>Subscribe and save. Receive 10% off your order if you sign up for our subscription!</p>
                </div>

                <div className="navbar_logo">

                    <div className="icon">
                        <a href="#"><AiOutlineTwitter /></a>
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"> <AiOutlineInstagram /></a>
                    </div>

                    <a href="/"><img style={scrollClick ? { top: "-20px", left: "0", position: "fixed", zIndex: "3" } : { marginTop: "0px" }} src={logo} alt="" /></a>

                    <div className={`icon2 ${getColor ? "black" : ""} `} style={scrollClick ? { top: "0px", zIndex: "3", color: "black", position: "fixed", right: "0px", marginTop: "10px" } : { marginTop: "0px" }}>
                        <a className={`${getColor ? "black" : ""}`} style={scrollClick ? { color: "black" } : {}} href="#"><BsSearch /></a>
                        <a className={`${getColor ? "black" : ""}`} style={scrollClick ? { color: "black" } : {}} href="#"><BiShoppingBag /></a>

                        <div className={`menyu_icon ${getColor ? "black" : ""} `} onClick={() => setIsMobile(!isMobile)}>
                            {isMobile ? (<FaTimes onClick={toggleModal} />) : (<FaBars onClick={toggleModal} />)}
                        </div>
                    </div>
                </div>

                <div style={scrollClick ? { position: "fixed", background: "white", color: "black", paddingLeft: "5px", top: 0, transition: "1s", zIndex: "2" } : { background: "unset" }} className="nav_text">
                    <ul className={isMobile ? "media" : ""}>
                        <a style={scrollClick ? { paddingLeft: "30px", color: "black", textDecoration: "none", transition: "0.5s" } : { paddingLeft: "40px", textDecoration: "none" }} href="/"><li>Home</li></a>
                        <a style={scrollClick ? { paddingLeft: "30px", color: "black", textDecoration: "none", transition: "0.5s" } : { paddingLeft: "40px", textDecoration: "none" }} href="our-story"><li>Our Story</li></a>
                        <a style={scrollClick ? { paddingLeft: "30px", color: "black", textDecoration: "none", transition: "0.5s" } : { paddingLeft: "40px", textDecoration: "none" }} href="our-ingredients"><li>Our Ingredients</li></a>
                        <a style={scrollClick ? { paddingLeft: "30px", color: "black", textDecoration: "none", transition: "0.5s" } : { paddingLeft: "40px", textDecoration: "none" }} href="main"><li>Recipes</li></a>
                        <a style={scrollClick ? { paddingLeft: "30px", color: "black", textDecoration: "none", transition: "0.5s" } : { paddingLeft: "40px", textDecoration: "none" }} href="main"><li>Store Locator</li></a>
                        <a style={scrollClick ? { paddingLeft: "30px", color: "black", textDecoration: "none", transition: "0.5s" } : { paddingLeft: "40px", textDecoration: "none" }} href="main"><li>Shop</li></a>

                    </ul>
                </div>

                {
                    modal && (
                        <div style={scrollClick ? { position: "fixed" } : { position: "absolute" }} className={`media_ul ${getColor ? "black" : ""} `} >
                            <ul>
                                <a href="/"> <li>Home</li></a>
                                <a href="our-story"><li>Our Story</li></a>
                                <a href="our-ingdients"><li>Our Ingredients</li></a>
                                <a href="recipes"><li>Recipes</li></a>
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