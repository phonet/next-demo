import React from 'react';
import styles from './index.less';
import ShoppingCartOutlined from '@ant-design/icons/lib/icons/ShoppingCartOutlined';
import Link from 'next/link';
import {getPicUrl, getSkuNum} from '../../../util/Utils';

/**
 * 门店商品
 * 2020/5/31 4:30 下午 BY TF
 */
const StoreGoods = ({
                        list = []
                    }) => {
    return (
        <div className={`contentWidth`}>
            <div className={styles.title}>全部商品</div>
            <div className={`fcb`}>
                {
                    list.length ?
                        list.map((item, i) => {
                            const storeInfoDTO = item.storeInfoDTO || {};
                            const goodsPic = item.goodsPic || [];
                            const goodsSkuDTOS = item.goodsSkuDTOS || [];
                            const skus = getSkuNum(goodsSkuDTOS) || {};
                            return (
                                <Link key={item.id} href={`/goodsDetail?storeId=${item.storeId}&goodsId=${item.id}`}>
                                    <a target={'_blank'}
                                       className={`${styles.goodsItem}`}
                                        //style={tempStyle}
                                    >
                                        <img src={getPicUrl(goodsPic[0])} className={styles.goodsImg}
                                             alt=""/>
                                        <div className={styles.goodsDesc}>
                                            <p className={styles.goodsName}>{item.goodsName}</p>
                                            <p className={styles.priceWrap}>
                                                <span className={styles.nowPrice}>¥{skus.salePrice}</span>
                                                {/*<span className={styles.marketPrice}>市场价 ¥630</span>*/}
                                            </p>
                                            <div className={`${styles.totalSaleWrap} fcb`}>
                                                {/*<p className={`${styles.saleTotal} fl fcb`}>
                                                销量：<span className={styles.nu m}>85万</span>
                                            </p>*/}
                                                <span className={`${styles.car} fr`}><ShoppingCartOutlined
                                                    style={{fontSize: 24, color: '#F33A3F'}}/></span>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            );
                        })
                        :
                        <div className={'noData'}>暂无数据</div>
                }
            </div>
        </div>
    );
};


export default StoreGoods;
