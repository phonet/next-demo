import React from 'react';
import styles from './index.less';
import ShoppingCartOutlined from "@ant-design/icons/lib/icons/ShoppingCartOutlined";

/**
 * 商品项展示
 * 2020/5/28 1:49 上午 BY TF
 * @returns {*}
 * @constructor
 */
const GoodsItem = ({
                       myClassName
                   }) => {
    return (
        <a href=""
           className={`${styles.goodsItem} ${myClassName ? myClassName : ''}`}
            //style={tempStyle}
        >
            <img src="../../static/images/test/goods.jpg" className={styles.goodsImg} alt=""/>
            <div className={styles.goodsDesc}>
                <p className={styles.goodsName}>Kiehl's 科颜氏 金盏花植物精华水金盏花植物精华</p>
                <p className={styles.priceWrap}>
                    <span className={styles.nowPrice}>¥519</span>
                    <span className={styles.marketPrice}>市场价 ¥630</span>
                </p>
                <p className={styles.storeName}>春雨（papa recipe）海外旗舰店</p>
                <div className={`${styles.totalSaleWrap} fcb`}>
                    <p className={`${styles.saleTotal} fl fcb`}>
                        销量：<span className={styles.num}>85万</span>
                    </p>
                    <span className={`${styles.car} fr`}><ShoppingCartOutlined
                        style={{fontSize: 24, color: '#F33A3F'}}/></span>
                </div>
            </div>
        </a>
    );
};

export default GoodsItem;
