import React from 'react'
import styles from './index.less';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import imgPrev from '../../assets/images/leftArrow.png';
import imgNext from '../../assets/images/rightArrow.png';

// 引入自动轮播。
import SwiperCore, { Autoplay, Navigation } from 'swiper';
SwiperCore.use([Autoplay, Navigation]);


const SwiperHeader = () => {

    const partnerLogo: Array<string> = [
        require('../../assets/images/swipertest.jpeg'),
        require('../../assets/images/swipertest.jpeg'),
        require('../../assets/images/swipertest.jpeg'),
        require('../../assets/images/swipertest.jpeg'),
        require('../../assets/images/swipertest.jpeg'),
        require('../../assets/images/swipertest.jpeg'),
      ];

    return (
        <div>
            <div className={styles.swiper}>
                <img className={styles.prev} src={imgPrev} />
                <Swiper spaceBetween={400} slidesPerView={3} loop autoplay
                 navigation={{ prevEl: `.${styles.prev}`, nextEl: `.${styles.next}`}}
                 >
                {partnerLogo.map((value, index) => {
                    return (
                    <SwiperSlide key={index}>
                        <img className={styles.item} src={value} />
                    </SwiperSlide>
                    );
                })}
                </Swiper>
                <img className={styles.next} src={imgNext} />
            </div>
        </div>
    )
}

export default SwiperHeader;