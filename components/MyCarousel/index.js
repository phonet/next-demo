import {Carousel} from 'antd';
import React from 'react';
import styles from './index.less';
import {IMG_BASE_URL} from '../../util/ConstConfig';
import Link from 'next/link';

/**
 * 轮播图组件
 * 2020/5/18 1:09 上午 BY TF
 * @returns {*}
 * @constructor
 */
const MyCarousel = ({
                        imgHeight,
                        swiperList = []
                    }) => {
    return (
        <div className={`bw`} style={{height:imgHeight || 520}}>
            <Carousel autoplay>
                {
                    swiperList.map(o => {
                        return (
                            <a target={'_blank'} key={o.id}>
                                <img className={styles.carouslImg}
                                     src={`${IMG_BASE_URL}${o.pictureUrl}`}
                                     height={imgHeight || 520}/>
                            </a>
                        );
                    })
                }
                {/*  <img className={styles.carouslImg} src={'../static/images/test_banner.png'}
                     height={imgHeight || 520}
                />
                <img className={styles.carouslImg} src={'../static/images/test_banner.png'}
                     height={imgHeight || 520}
                />*/}
            </Carousel>
        </div>
    );
};

export default MyCarousel;
