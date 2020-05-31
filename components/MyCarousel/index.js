import {Carousel} from 'antd';
import React from 'react';
import styles from './index.less';

/**
 * 轮播图组件
 * 2020/5/18 1:09 上午 BY TF
 * @returns {*}
 * @constructor
 */
const MyCarousel = ({
                        imgHeight
                    }) => {
    console.log(imgHeight)
    return (
        <div className={`bw`}>
            <Carousel autoplay>
                <img className={styles.carouslImg} src={'../static/images/test_banner.png'}
                     height={imgHeight || 520}/>
                <img className={styles.carouslImg} src={'../static/images/test_banner.png'}
                     height={imgHeight || 520}
                />
                <img className={styles.carouslImg} src={'../static/images/test_banner.png'}
                     height={imgHeight || 520}
                />
            </Carousel>
        </div>
    );
};

export default MyCarousel;
