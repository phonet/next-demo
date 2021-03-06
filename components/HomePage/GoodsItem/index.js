import React from 'react';
import styles from './index.less';
import {getPicUrl, getSkuNum} from '../../../util/Utils';
import Link from 'next/link';

/**
 * 商品展示项(可能只适用于首页)
 * 2020/5/19 1:57 上午 BY TF
 * @returns {*}
 * @constructor
 */
const GoodsItem = ({
                       rightGap = 8,
                       myClassName,
                       myStyle,
                       data = {}
                   }) => {
    //const tempStyle = myStyle ? {marginRight: rightGap, ...myStyle} : {marginRight: rightGap};
    const goodsDTO = data.goodsDTO || {};
    const goodsSkuDTOS = goodsDTO.goodsSkuDTOS || [];
    const skus = getSkuNum(goodsSkuDTOS);
    return (
        <Link href={`/goodsDetail?storeId=${goodsDTO.storeId}&goodsId=${goodsDTO.id}`}>
            <a target={'_blank'}
               className={`${styles.goodsItem} ${myClassName ? myClassName : ''}`}
                //style={tempStyle}
            >
                <img src={getPicUrl(goodsDTO.goodsPic && goodsDTO.goodsPic[0])} className={styles.goodsImg}
                     alt={goodsDTO.goodsName}/>
                <div className={styles.goodsDesc}>
                    <p className={styles.goodsName}>{goodsDTO.goodsName}</p>
                    <p className={styles.priceWrap}>
                        <span className={styles.nowPrice}>¥{skus.salePrice}</span>
                        <span className={styles.marketPrice}>市场价 ¥{skus.marketPrice}</span>
                    </p>
                </div>
            </a>
        </Link>
    );
};

export default GoodsItem;
