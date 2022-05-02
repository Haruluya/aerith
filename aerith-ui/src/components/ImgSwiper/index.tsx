import React from 'react'
import styles from './index.less';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay } from 'swiper';
export default function ImgSwiper() {

    SwiperCore.use([Autoplay]);

    const partnerLogo: Array<string> = [
        'https://img2.baidu.com/it/u=3406364017,3476071676&fm=253&fmt=auto&app=138&f=JPEG?w=830&h=500', 
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
