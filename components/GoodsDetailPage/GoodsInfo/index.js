import React, {Fragment, useEffect, useState} from 'react';
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
    console.log(data);
    const [currentChose, setCurrentChose] = useState({});
    useEffect(() => {
        let tempObj = {};
        tempObj = {
            ...data,
            currentBuy: {
                currentSku: goodsSkuDTOS.length > 0 ? goodsSkuDTOS[0] : {},
                currentProps: goodsPropertyDTOS.length > 0 ? goodsPropertyDTOS.map(o => ({
                    ...o,
                    currentPropsTags: o.goodsPropertyTagDTOS.length > 0 ? o.goodsPropertyTagDTOS[0] : {}
                })) : {},
                buyNums: 1
            }
        };
        console.log(tempObj);
        setCurrentChose(tempObj);
    }, []);


    const onChangeBuyNums = (val) => {
        const temp = {
            ...currentChose,
            currentBuy: {
                ...currentChose.currentBuy,
                buyNums: val
            }
        };
        setCurrentChose(temp);
    };


    const currentBuy = currentChose.currentBuy || {};
    const currentSku = currentBuy.currentSku || {};
    const currentProps = currentBuy.currentProps || [];
    const buyNums = currentBuy.buyNums || 1;
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
                                            <li key={o.id}
                                                onClick={() => {
                                                    const temp = {
                                                        ...currentChose,
                                                        currentBuy: {
                                                            ...currentChose.currentBuy,
                                                            currentSku: o,
                                                            buyNums: 1
                                                        }
                                                    };
                                                    // console.log(temp);
                                                    setCurrentChose(temp);
                                                }}
                                            >
                                                <a className={`${styles.skuName} ${o.id === currentSku.id ? styles.active : ''}`}>{o.name}（{o.weight}+{o.volume}）</a>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </>
                        : null
                }
            </div>
            <div className={styles.minGap}>
                {
                    goodsPropertyDTOS.length ?
                        goodsPropertyDTOS.map((o, i) => {
                            const goodsPropertyTagDTOS = o.goodsPropertyTagDTOS || [];
                            const currentTag = currentProps.length && currentProps[i]['currentPropsTags'] || {};
                            return (
                                <div className={`${styles.colorWrap} fcb`} key={o.id}>
                                    <Fragment key={o.id}>
                                        <span className={`${styles.title} fl`}>{o.name}</span>
                                        <div className={`fl`}>
                                            <Radio.Group size={'small'}
                                                         buttonStyle="solid"
                                                         value={currentTag.id}
                                            >
                                                {
                                                    goodsPropertyTagDTOS.map(a => {
                                                        return (
                                                            <Radio.Button value={a.id}
                                                                          key={a.id}
                                                                          onClick={() => {
                                                                              currentProps[i]['currentPropsTags'] = a;
                                                                              const temp = {
                                                                                  ...currentChose,
                                                                                  currentBuy: {
                                                                                      ...currentChose.currentBuy,
                                                                                      currentProps: currentProps,
                                                                                      buyNums: 1
                                                                                  }
                                                                              };
                                                                              setCurrentChose(temp);
                                                                          }}
                                                            >
                                                                {a.name}
                                                            </Radio.Button>
                                                        );
                                                    })
                                                }

                                            </Radio.Group>
                                        </div>
                                    </Fragment>
                                </div>
                            );
                        })
                        :
                        null
                }
            </div>
            <div className={`${styles.buyNum} fcb`}>
                <span className={`${styles.title} fl`}>数量</span>
                <div className={`fl`}>
                    <InputBuyNumber value={buyNums}
                                    onChange={val => onChangeBuyNums(val)}
                                    onAddHandle={val => onChangeBuyNums(val)}
                                    onCuteHandle={val => onChangeBuyNums(val)}
                    />
                </div>
            </div>
            <div className={styles.buyBtnWrap}>
                <span className={`${styles.buyBtn} ${styles.buyNow}`}>立即购买</span>
                <span className={`${styles.buyBtn} ${styles.addCar}`} href={'/car'} target={'_blank'}>加入购物车</span>
            </div>
        </div>
    );
};


export default GoodsInfo;
