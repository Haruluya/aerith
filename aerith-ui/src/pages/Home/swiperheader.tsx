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
        'https://upload-bbs.mihoyo.com/upload/2022/05/01/133056c0a126f23979fe25ba60237f59.png',
        'https://upload-bbs.mihoyo.com/upload/2022/04/29/e213c6506291977fabef7f83935b3772.png',
        'https://upload-bbs.mihoyo.com/upload/2021/10/31/c68c5dcb9286cf2c4af6f37f844b86fc.jpeg',
        'https://upload-bbs.mihoyo.com/upload/2022/05/01/871518859281941a837b1976a513126c.jpeg',
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