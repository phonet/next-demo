import React, {Fragment} from 'react';
import {Input, Radio} from 'antd';
import styles from './index.less';
import PlusOutlined from '@ant-design/icons/lib/icons/PlusOutlined';
import MinusOutlined from '@ant-design/icons/lib/icons/MinusOutlined';
import InputBuyNumber from '../../InputBuyNumber';
import {getSkuNum} from '../../../util/Utils';

/**
 * 商品详情介绍
 * 2020/5/29 12:05 上午 BY TF
 */
const GoodsInfo = ({
                       data = {}
                   }) => {
    const goodsSkuDTOS = data.goodsSkuDTOS || [];
    const goodsPropertyDTOS = data.goodsPropertyDTOS || [];

    return (
        <div className={`${styles.goodsInfoWrap} fl`}>
            <h1 className={styles.goodsName}>{data.goodsName}</h1>
            <p className={styles.goodsDesc}>{data.goodsDesc}</p>
            <div className={styles.goodsPriceWrap}>
                <p>
                    <span className={styles.title}>售价</span>
                    <span className={styles.nowPrice}>¥{getSkuNum(goodsSkuDTOS)['salePrice']}</span>
                    <span className={styles.marketPrice}>市场价 ¥{getSkuNum(goodsSkuDTOS)['marketPrice']}</span>
                </p>
                <p>
                    <span className={styles.title}>税费</span>
                    <span>预估....</span>
                </p>
                <p>
                    <span className={styles.title}>运费</span>
                    <span>韩国至成都 10元</span>
                </p>
                <p>
                    <span className={styles.title}>销量</span>
                    <span>{getSkuNum(goodsSkuDTOS)['saleVolume']}</span>
                </p>
            </div>
            <div className={`${styles.skuWrap} fcb`}>
                {
                    goodsSkuDTOS.length ?
                        <>
                            <span className={`${styles.title} fl`}>选择</span>
                            <ul className={`${styles.skuList} fl`}>
                                {
                                    goodsSkuDTOS.map(o => {
                                        return (
                                            <li><a className={styles.skuName}>{o.name}（{o.weight}+{o.volume}）</a></li>
                                        );
                                    })
                                }
                            </ul>
                        </>
                        : null
                }
            </div>
            <div className={`${styles.colorWrap} fcb`}>
                {
                    goodsPropertyDTOS.length ?
                        <>
                            {
                                goodsPropertyDTOS.map(o => {
                                    const goodsPropertyTagDTOS = o.goodsPropertyTagDTOS || [];
                                    return (
                                        <Fragment key={o.id}>
                                            <span className={`${styles.title} fl`}>{o.name}</span>
                                            <div className={`fl`}>
                                                <Radio.Group size={'small'} buttonStyle="solid">
                                                    {
                                                        goodsPropertyTagDTOS.map(a => {
                                                            return (
                                                                <Radio.Button value={a.id}
                                                                              key={a.id}>{a.name}</Radio.Button>
                                                        )
                                                        })
                                                    }

                                                </Radio.Group>
                                            </div>
                                        </Fragment>
                                    );
                                })
                            }
                        </>
                        :
                        null
                }
            </div>
            <div className={`${styles.buyNum} fcb`}>
                <span className={`${styles.title} fl`}>数量</span>
                <div className={`fl`}>
                    <InputBuyNumber/>
                </div>
            </div>
            <div className={styles.buyBtnWrap}>
                <a className={`${styles.buyBtn} ${styles.buyNow}`}>立即购买</a>
                <a className={`${styles.buyBtn} ${styles.addCar}`} href={'/car'} target={'_blank'}>加入购物车</a>
            </div>
        </div>
    );
};


export default GoodsInfo;
