import {Progress} from 'antd';
import React from 'react';
import PriceShow from '../../PriceShow';
import styles from './index.less';
import {IMG_BASE_URL} from '../../../util/ConstConfig';
import {getPicUrl, getSkuNum} from '../../../util/Utils';
import Link from 'next/link';

/**
 * 超级单品
 * 2020/5/18 1:39 上午 BY TF
 * @returns {*}
 * @constructor
 */
const SuperGoods = ({
                        list = []
                    }) => {
    return (
        <div className={`${styles.superGoods} contentWidth mb40`}>
            <ul className={`${styles.superGoodsList} fcb`}>
                <li className={`${styles.item}`}>
                    <h1>超级单品</h1>
                    <h2>限量 品质 超值</h2>
                    <i/>
                    <h3>全球多款品质好货</h3>
                </li>
                {
                    list.map((o, i) => {
                        const goodsDTO = o.goodsDTO || {};
                        const pic = goodsDTO.goodsPic && goodsDTO.goodsPic[0];
                        const goodsSkuDTOS = goodsDTO.goodsSkuDTOS || {};
                        const skus = getSkuNum(goodsSkuDTOS);
                        return (
                            <li className={`${styles.item}`}
                                key={i}
                            >
                                <Link href={`/goodsDetail?storeId=${goodsDTO.storeId}&goodsId=${goodsDTO.id}`}>
                                    <a target={'_blank'}>
                                        <img src={getPicUrl(pic)} alt=""
                                             className={styles.googsImg}
                                        />
                                        <div className={styles.googsDesc}>
                                            <p className={`${styles.goodsName} break`}
                                               title={goodsDTO.goodsName}>{goodsDTO.goodsName || '未知名称'}</p>
                                            <Progress percent={o.saleVolume} status="exception" showInfo={false}
                                                      strokeColor={'#F33A3F'}
                                                      trailColor={'#EAEAEA'}
                                            />
                                            <PriceShow nowPrice={skus.salePrice}
                                                       marketPrice={skus.marketPrice}
                                            />
                                        </div>
                                    </a>
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
            <div className={`${styles.superGoodsBg}`}/>
        </div>
    );
};

export default SuperGoods;
