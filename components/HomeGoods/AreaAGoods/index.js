import React from 'react';
import styles from './index.less';

/**
 * 热卖品牌(A区广告)
 * 2020/5/18 1:15 上午 BY TF
 * @returns {*}
 * @constructor
 */
const AreaAGoods = () => {
	return (
		<ul className={'mb40 fcb'}>
			<li className={`${styles.hotItem}`}>
				<p className={styles.titleWrap}>
					<span className={styles.title}>热卖品牌</span>
					<span className={styles.subTitle}>全球精选，一网打尽</span>
				</p>
				<img src="../static/images/test/hot1.png" width={'100%'} height={320} alt=""/>
			</li>
			<li className={`${styles.hotItem}`}>
				<p className={styles.titleWrap}>
					<span className={styles.title}>聚名品</span>
					<span className={styles.subTitle}>全球优质品牌都在这里</span>
				</p>
				<img src="../static/images/test/hot2.png" width={'100%'} height={320} alt=""/>
			</li>
			<li className={`${styles.hotItem}`}>
				<p className={styles.titleWrap}>
					<span className={styles.title}>全球好物</span>
					<span className={styles.subTitle}>为您甄选品质好货</span>
				</p>
				<img src="../static/images/test/hot3.png" width={'100%'} height={320} alt=""/>
			</li>
		</ul>
	);
};

export default AreaAGoods;