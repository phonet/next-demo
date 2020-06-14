import React from 'react';
import styles from './index.less';
import ShoppingCartOutlined from '@ant-design/icons/lib/icons/ShoppingCartOutlined';
import Link from 'next/link';
import {getPicUrl, getSkuNum} from '../../util/Utils';

/**
 * 商品项展示
 * 2020/5/28 1:49 上午 BY TF
 * @returns {*}
 * @constructor
 */
const GoodsItem = ({
                       myClassName,
                       item = {}
                   }) => {
    const storeInfoDTO = item.storeInfoDTO || {};
    const goodsPic = item.goodsPic || [];
    const goodsSkuDTOS = item.goodsSkuDTOS || [];
    const skus = getSkuNum(goodsSkuDTOS) || {};

    return (
        <Link href={`/goodsDetail?storeId=${item.storeId}&goodsId=${item.id}`}>
            <a className={`${styles.goodsItem} ${myClassName ? myClassName : ''}`}
               target={'_blank'}
                //style={tempStyle}
            >
                <img src={getPicUrl(goodsPic[0])} className={styles.goodsImg} alt={item.goodsName}/>
                <div className={styles.goodsDesc}>
                    <p className={styles.goodsName}>{item.goodsName}</p>
                    <p className={styles.priceWrap}>
                        <span className={styles.nowPrice}>¥{skus.salePrice}</span>
                        <span className={styles.marketPrice}>市场价 ¥{skus.marketPrice}</span>
                    </p>
                    <p className={styles.storeName}>{storeInfoDTO.storeName}</p>
                    <div className={`${styles.totalSaleWrap} fcb`}>
                        <p className={`${styles.saleTotal} fl fcb`}>
                            销量：<span className={styles.num}>{item.saleVolume}</span>
                        </p>
                        <span className={`${styles.car} fr`}><ShoppingCartOutlined
                            style={{fontSize: 24, color: '#F33A3F'}}/></span>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default GoodsItem;
