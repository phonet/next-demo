import {Carousel} from 'antd';
import React from 'react';
import styles from './HomeCarousel.less';

/**
 * 首页轮播图
 * 2020/5/18 1:09 上午 BY TF
 * @returns {*}
 * @constructor
 */
const HomeCarousel = () => {
	return (
		<div className={`bw`}>
			<Carousel autoplay>
				<img className={styles.carouslImg} src={'../static/images/test_banner.png'}/>
				<img className={styles.carouslImg} src={'../static/images/test_banner.png'}/>
				<img className={styles.carouslImg} src={'../static/images/test_banner.png'}/>
			</Carousel>
		</div>
	);
};

export default HomeCarousel;