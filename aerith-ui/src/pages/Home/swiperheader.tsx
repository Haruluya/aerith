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
        require('../../assets/images/swipertest.jpeg'),
        require('../../assets/images/swipertest.jpeg'),
        require('../../assets/images/aeriths.jpg'),
        require('../../assets/images/swipertest.jpeg'),
        require('../../assets/images/swipertest.jpeg'),
        require('../../assets/images/swipertest.jpeg'),
      ];

    return (
        <div>
            <div className={styles.swiper}>
                <img className={styles.prev} src={imgPrev} />
                <Swiper spaceBetween={250} slidesPerView={3} loop autoplay
                 navigation={{ prevEl: `.${styles.prev}`, nextEl: `.${styles.next}`}}
                 scrollbar={{ draggable: true }}
                 >
                {partnerLogo.map((value, index) => {
                    return (
                        <div>
                            <SwiperSlide key={index}>
                                <img className={styles.item} src={value} />
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