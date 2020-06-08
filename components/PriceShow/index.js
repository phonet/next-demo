import React from 'react';
import styles from './index.less';

/**
 * 价格显示
 * 2020/5/18 3:00 上午 BY TF
 * @returns {*}
 * @constructor
 */
const PriceShow = ({
                       nowPrice = 0.00,
                       marketPrice = 999.00
                   }) => {
    return (
        <div className={`fcb`}>
            <p className={`${styles.currentPrice}`}>¥{nowPrice}</p>
            <p className={`${styles.marketPrice}`}>市场价 ¥{marketPrice}</p>
        </div>
    );
};

export default PriceShow;
