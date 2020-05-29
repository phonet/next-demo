import React from 'react';
import styles from './index.less';

/**
 * 商品展示项(可能只适用于首页)
 * 2020/5/19 1:57 上午 BY TF
 * @returns {*}
 * @constructor
 */
const GoodsItem = ({
                       rightGap = 8,
                       myClassName,
                       myStyle
                   }) => {
    //const tempStyle = myStyle ? {marginRight: rightGap, ...myStyle} : {marginRight: rightGap};
    return (
        <a href="/goodsDetail" target={'_blank'}
           className={`${styles.goodsItem} ${myClassName ? myClassName : ''}`}
            //style={tempStyle}
        >
            <img src="../../../static/images/test/speical1.png" className={styles.goodsImg} alt=""/>
            <div className={styles.goodsDesc}>
                <p className={styles.goodsName}>Kiehl's 科颜氏 金盏花植物精华水金盏花植物精华</p>
                <p className={styles.priceWrap}>
                    <span className={styles.nowPrice}>¥519</span>
                    <span className={styles.marketPrice}>市场价 ¥630</span>
                </p>
            </div>
        </a>
    );
};

export default GoodsItem;
