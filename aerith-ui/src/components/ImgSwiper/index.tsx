import React from 'react'
import styles from './index.less';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay } from 'swiper';
export default function ImgSwiper() {

    SwiperCore.use([Autoplay]);

    const partnerLogo: Array<string> = [
        require('../../assets/images/swipertest.jpeg'),
        require('../../assets/images/swipertest.jpeg'),
        require('../../assets/images/swipertest.jpeg'),
        require('../../assets/images/swipertest.jpeg'),
        require('../../assets/images/swipertest.jpeg'),
        require('../../assets/images/swipertest.jpeg'),
        ];

    return (
        <div className={styles.imgSwiperPart}>
            <Swiper spaceBetween={0} slidesPerView={1} loop autoplay
                    >
                    {partnerLogo.map((value, index) => {
                        return (
                        <SwiperSlide key={index}>
                            <img className={styles.item} src={value} />
                        </SwiperSlide>
                        );
                    })}
            </Swiper>
        </div>
    )
}
