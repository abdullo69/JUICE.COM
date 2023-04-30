import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineBars } from "react-icons/ai"
import { FaBars, FaFacebookF, FaTimes } from "react-icons/fa"
import logo from "../../images/logo.png"
import { BsSearch } from "react-icons/bs"
import { BiShoppingBag } from "react-icons/bi"
import { Link, useLocation } from 'react-router-dom'
function Navbar() {
    const [isMobile, setIsMobile] = useState(false)
    const [scrollClick, setScrollClick] = useState(false)
    const [getColor, setColor] = useState(false)
    // console.log(scrollClick)

    useEffect(() => {
        window.addEventListener('scroll', function () {

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

    const [search, setSearch] = useState(false)
    const toSearch = () => {
        setSearch(!search)
    }
    return (
        <div>
            <div className={`navbar ${getColor ? "black" : ""} `}>
                <div className="nav_sub">
                    <p>Subscribe and save. Receive 10% off your order if you sign up for our subscription!</p>
                </div>
                {
                    search && (
                        <div style={scrollClick ? { position: "fixed", top: "40px", } : { marginTop: '0px' }} className="search">
                            <input type="text" placeholder='SEARCH' />
                            <FaTimes onClick={toSearch} className='fatimes' />
                        </div>
                    )
                }
                <div className="navbar_logo">

                    <div className="icon">
                        <Link to="#"><AiOutlineTwitter /></Link>
                        <Link to="#"><FaFacebookF /></Link>
                        <Link to="#"> <AiOutlineInstagram /></Link>
                    </div>

                    <Link to="/" style={scrollClick ? { zIndex: 999 } : { zIndex: -1 }}><img style={scrollClick ? { top: "-20px", left: "0", position: "fixed", zIndex: "3" } : { marginTop: "0px" }} src={logo} alt="" /></Link>

                    <div className={`icon2 ${getColor ? "black" : ""} `} style={scrollClick ? { top: "0px", zIndex: "3", color: "black", position: "fixed", right: "0px", marginTop: "10px" } : { marginTop: "0px" }}>
                        <p className={`${getColor ? "black" : ""}`} style={scrollClick ? { color: "black" } : {}} href="#"><BsSearch onClick={toSearch} /></p>
                        <Link className={`${getColor ? "black" : ""}`} style={scrollClick ? { color: "black" } : {}} to="/shopping_cart"><BiShoppingBag /></Link>

                        <div className={`menyu_icon ${getColor ? "black" : ""} `} onClick={() => setIsMobile(!isMobile)}>
                            {isMobile ? (<FaTimes className='fa-times ' onClick={toggleModal} />) : (<FaBars onClick={toggleModal} />)}
                        </div>
                    </div>
                </div>

                <div style={scrollClick ? { position: "fixed", background: "white", color: "black", paddingLeft: "5px", top: 0, zIndex: "2" } : { background: "unset" }} className="nav_text">
                    <ul className={isMobile ? "media" : ""}>
                        <Link style={scrollClick ? { paddingLeft: "30px", color: "black", textDecoration: "none", transition: "0.5s" } : { paddingLeft: "40px", textDecoration: "none" }} to="/"><li>Home</li></Link>
                        <Link style={scrollClick ? { paddingLeft: "30px", color: "black", textDecoration: "none", transition: "0.5s" } : { paddingLeft: "40px", textDecoration: "none" }} to="/our-story"><li>Our Story</li></Link>
                        <Link style={scrollClick ? { paddingLeft: "30px", color: "black", textDecoration: "none", transition: "0.5s" } : { paddingLeft: "40px", textDecoration: "none" }} to="/our-ingredients"><li>Our Ingredients</li></Link>
                        <Link style={scrollClick ? { paddingLeft: "30px", color: "black", textDecoration: "none", transition: "0.5s" } : { paddingLeft: "40px", textDecoration: "none" }} to="/shop"><li>Shop</li></Link>
                    </ul>
                </div>

                {
                    modal && (
                        <div style={scrollClick ? { position: "fixed", marginTop: "60px" } : { position: "absolute" }} className={`media_ul ${getColor ? "black" : ""} `} >
                            <ul>
                                <Link to="/"> <li>Home</li></Link>
                                <Link to="/our-story"><li>Our Story</li></Link>
                                <Link to="/our-ingredients"><li>Our Ingredients</li></Link>
                                <Link to="/shop"><li>Shop</li></Link>
                            </ul>


                            <div style={{ marginTop: "20px", textDecoration: "undirline" }} className="icon">
                                <Link to="#"><AiOutlineTwitter /></Link>
                                <Link to="#"><FaFacebookF /></Link>
                                <Link to="#"> <AiOutlineInstagram /></Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar