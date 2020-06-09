import React from 'react';
import styles from './index.less';
import ShoppingCartOutlined from '@ant-design/icons/lib/icons/ShoppingCartOutlined';

/**
 * 商品详情
 * 2020/5/31 2:41 上午 BY TF
 */
const GoodsDetails = ({
                          details = null
                      }) => {
    return (
        <div className={`${styles.goodsDetailsWrap} contentWidth fcb`}>
            <div className={`${styles.otherRecommond} fl`}>
                <div className={`${styles.otherStore}`}>
                    <a className={styles.header}>Freeplus芙丽芳丝旗舰店</a>
                    <div className={styles.otherStoreOption}>
                        <a href="" className={`${styles.go}`}>进店逛逛</a>
                        <a href="" className={`${styles.action}`}>关注店铺</a>
                    </div>
                </div>
                <div className={styles.otherGoods}>
                    <div className={styles.header}>门店其它商品</div>
                    <ul className={styles.otherGoodsList}>
                        <li>
                            <a href=""
                               className={`${styles.goodsItem}`}
                                //style={tempStyle}
                            >
                                <img src="../../../static/images/test/goods.jpg" className={styles.goodsImg} alt=""/>
                                <div className={styles.goodsDesc}>
                                    <p className={styles.goodsName}>Kiehl's 科颜氏 金盏花植物精华水金盏花植物精华</p>
                                    <p className={styles.priceWrap}>
                                        <span className={styles.nowPrice}>¥519</span>
                                        <span className={styles.marketPrice}>市场价 ¥630</span>
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href=""
                               className={`${styles.goodsItem}`}
                                //style={tempStyle}
                            >
                                <img src="../../../static/images/test/goods.jpg" className={styles.goodsImg} alt=""/>
                                <div className={styles.goodsDesc}>
                                    <p className={styles.goodsName}>Kiehl's 科颜氏 金盏花植物精华水金盏花植物精华</p>
                                    <p className={styles.priceWrap}>
                                        <span className={styles.nowPrice}>¥519</span>
                                        <span className={styles.marketPrice}>市场价 ¥630</span>
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`${styles.detailContent}`}>
                <div dangerouslySetInnerHTML={{__html: details}}/>
            </div>
        </div>
    );
};


export default GoodsDetails;
