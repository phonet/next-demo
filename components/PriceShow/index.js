import React from 'react';
import styles from './index.less';

/**
 * 价格显示
 * 2020/5/18 3:00 上午 BY TF
 * @returns {*}
 * @constructor
 */
const PriceShow = () => {
	return (
		<div className={`fcb`}>
			<p className={`${styles.currentPrice}`}>¥375.00</p>
			<p className={`${styles.marketPrice}`}>市场价 ¥918.00</p>
		</div>
	);
};

export default PriceShow;