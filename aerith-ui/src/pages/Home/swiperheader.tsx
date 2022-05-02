import React from 'react'
import styles from './index.less';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';
import 'swiper/components/effect-fade/effect-fade.scss';

import imgPrev from '../../assets/images/leftArrow.png';
import imgNext from '../../assets/images/rightArrow.png';

// 引入自动轮播。
import SwiperCore, { Autoplay, Navigation,Scrollbar} from 'swiper';
SwiperCore.use([Autoplay, Navigation, Scrollbar]);


const SwiperHeader = () => {

    const partnerLogo: Array<string> = [
        require('@/assets/homeSwiper/pic01.webp'),
        require('@/assets/homeSwiper/pic02.webp'),
        require('@/assets/homeSwiper/pic03.webp'),
        require('@/assets/homeSwiper/pic04.webp'),
      ];

    return (
        <div>
            <div className={styles.swiper}>
                <img className={styles.prev} src={imgPrev} />
                <Swiper spaceBetween={100} slidesPerView={1} loop autoplay
                 navigation={{ prevEl: `.${styles.prev}`, nextEl: `.${styles.next}`}}
                 scrollbar={{ draggable: true }}
                 >
                {partnerLogo.map((value, index) => {
                    return (
                        <div key={index}>
                            <SwiperSlide key={index}>
                                <img className={styles.item} src={value} key={index} />
                            </SwiperSlide>
                              
                        </div>
                    
                    );
                })}
                </Swiper>
                <img className={styles.next} src={imgNext} />
            </div>
        </div>
    )
}

export default SwiperHeader;