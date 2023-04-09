import React, { useState } from 'react'
import "./Deli.scss"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, autoplay, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai"
import json from "../StaticData"
import { AiFillEye } from "react-icons/ai"
import { BiShoppingBag } from "react-icons/bi"
import From from '../From/From';
import { useEffect } from 'react';
function Deli() {

    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }
    const [screenSize, setScreenSize] = useState(4)

    useEffect(() => {
        console.log(window.screen.width)

        const getScreen = () => {
            if (window.screen.width < 500) {
                setScreenSize(1)
            } else if (window.screen.width < 800) {
                setScreenSize(2)
            } else {
                setScreenSize(4)
            }
        }
        getScreen()
    }, [window.screen.width])


    return (
        <div>
            <div className="deli">
                <div className="deli_navbar">
                    <h1>Deliciously Pure, Nourishing Blends For Every Moment</h1>
                    <p>SIP TODAY</p>
                </div>

                <div>
                    <Swiper className='swiper'
                        // install Swiper modules
                        modules={[Navigation, Scrollbar, A11y, Autoplay]}
                        spaceBetween={1}
                        slidesPerView={screenSize}

                        // autoplay={{ delay: 1000 }}

                        navigation={{
                            prevEl: ".left",
                            nextEl: ".right",
                        }}


                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {
                            json.map((json, inx) => {
                                return (
                                    <SwiperSlide>
                                        <div className="card">
                                            <img src={json.img} alt="" />
                                            <img className='img2' src={json.img2} alt="" />
                                            <div className="card_text">
                                                <h1>{json.title}</h1>
                                                <div className='p'><p style={{ color: "aqua" }}>{json.price}</p></div>
                                                <div className="card_icon">
                                                    <h3><BiShoppingBag style={{ color: "aqua" }} /> Read More</h3>
                                                    <h3 onClick={toggleModal}><AiFillEye color='aqua' /> Quick View</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }



                        <div className='left'>
                            <AiOutlineLeft />
                        </div>
                        <div className='right'>
                            <AiOutlineRight />
                        </div>

                    </Swiper>
                </div>
            </div>
            <From />
        </div >
    )
}

export default Deli