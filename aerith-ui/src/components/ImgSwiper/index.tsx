import React from 'react'
import styles from './index.less';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay } from 'swiper';
export default function ImgSwiper() {

    SwiperCore.use([Autoplay]);

    const partnerLogo: Array<string> = [
       'https://upload-bbs.mihoyo.com/pc_ad/pc_ad.png',
        'https://upload-bbs.mihoyo.com/upload/2021/11/04/fabce5abf837e6d769cf73ebe7e1e60b_4481362569382882994.jpg', 
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
