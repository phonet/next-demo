import React from "react";
import styles from './index.less';
import ShoppingCartOutlined from "@ant-design/icons/lib/icons/ShoppingCartOutlined";

/**
 * 门店商品
 * 2020/5/31 4:30 下午 BY TF
 */
const StoreGoods = () => {
    const testArr = new Array(20).fill(1);


    return (
        <div className={`contentWidth`}>
            <div className={styles.title}>全部商品</div>
            <div className={`fcb`}>
                {
                    testArr.map((o, i) => {
                        return (
                            <a href=""
                               className={`${styles.goodsItem}`}
                                //style={tempStyle}
                            >
                                <img src="../../../static/images/test/goods.jpg" className={styles.goodsImg} alt=""/>
                                <div className={styles.goodsDesc}>
                                    <p className={styles.goodsName}>Kiehl's 科颜氏 金盏花植物精华水金盏花植物精华</p>
                                    <p className={styles.priceWrap}>
                                        <span className={styles.nowPrice}>¥519</span>
                                        {/*<span className={styles.marketPrice}>市场价 ¥630</span>*/}
                                    </p>
                                    <div className={`${styles.totalSaleWrap} fcb`}>
                                        {/*<p className={`${styles.saleTotal} fl fcb`}>
                                                销量：<span className={styles.num}>85万</span>
                                            </p>*/}
                                        <span className={`${styles.car} fr`}><ShoppingCartOutlined
                                            style={{fontSize: 24, color: '#F33A3F'}}/></span>
                                    </div>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default StoreGoods;
