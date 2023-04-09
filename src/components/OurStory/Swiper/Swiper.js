import { Swiper, SwiperSlide } from 'swiper/react';
import "./Swiper.scss"
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper';
import swiper1 from "../../../images/swiper1.webp"
import swiper2 from "../../../images/swiper2.jpg"
import swiper3 from "../../../images/swiper3.jpg"
import swiper4 from "../../../images/swiper4.jpg"
import swiper5 from "../../../images/swiper5.jpg"
import Give from '../Give/Give';
export default () => {
    return (
        <div>
            <Swiper className='swiper'
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={{ clickable: true }}
                autoplay={{ delay: 1000 }}
            >
                <SwiperSlide className='swiper_cart'>
                    <img src={swiper1} alt="" />
                </SwiperSlide>
                <SwiperSlide className='swiper_cart'>
                    <img src={swiper2} alt="" />
                </SwiperSlide>
                <SwiperSlide className='swiper_cart'>
                    <img src={swiper3} alt="" />
                </SwiperSlide>
                <SwiperSlide className='swiper_cart'>
                    <img src={swiper4} alt="" />
                </SwiperSlide>
                <SwiperSlide className='swiper_cart'>
                    <img src={swiper5} alt="" />
                </SwiperSlide>
            </Swiper>
            <Give />
        </div>
    );
};