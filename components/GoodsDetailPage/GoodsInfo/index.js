import React, {Fragment, useEffect, useState} from 'react';
import {Input, Radio, message} from 'antd';
import styles from './index.less';
import PlusOutlined from '@ant-design/icons/lib/icons/PlusOutlined';
import MinusOutlined from '@ant-design/icons/lib/icons/MinusOutlined';
import InputBuyNumber from '../../InputBuyNumber';
import {getSkuNum} from '../../../util/Utils';
import {addCarApi, addCollectApi, addFollowApi, deleteCollectApi, isCollectApi} from '../../../api/Api';
import {getLoginStorage} from '../../../util/saveLogin';
import Router from 'next/router';
import {ConfirmModal} from '../../ModalAlert';

/**
 * 商品详情介绍
 * 2020/5/29 12:05 上午 BY TF
 */
const GoodsInfo = ({
                       data = {}
                   }) => {
    const goodsSkuDTOS = data.goodsSkuDTOS || [];
    const goodsPropertyDTOS = data.goodsPropertyDTOS || [];

    const [currentChose, setCurrentChose] = useState({});
    const [isCollection, setIsCollection] = useState(false);

    const getIsCollection = async () => {
        try {
            const res = await isCollectApi(data.id);
            if (res.code === 20000) {
                setIsCollection(res.data);
            } else {
                message.error(`${res.messsage || '获取是否收藏报错'}`);
            }
        } catch (e) {

        }
    };

    useEffect(() => {
        let tempObj = {};
        // console.log(goodsPropertyDTOS);
        // console.log(o.goodsPropertyTagDsTOS);
        tempObj = {
            ...data,
            currentBuy: {
                currentSku: goodsSkuDTOS.length > 0 ? goodsSkuDTOS[0] : {},
                currentProps: goodsPropertyDTOS.length > 0 ? goodsPropertyDTOS.map(o => ({
                    ...o,
                    currentPropsTags: o.goodsPropertyTagDTOS && o.goodsPropertyTagDTOS.length > 0 ? o.goodsPropertyTagDTOS[0] : {}
                })) : {},
                buyNums: 1
            }
        };
        // console.log(tempObj);
        setCurrentChose(tempObj);
        const userInfo = getLoginStorage();
        if (userInfo.id && data.id) {
            getIsCollection();
        }

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

    //添加购物车
    const addCar = async (isGoCar) => {
        const senData = {
            goodsPropertyTagIds: currentProps.map(o => (o['currentPropsTags']['id'])),
            productAttr: currentProps.map(o => ({key: o.name, value: o['currentPropsTags']['name']})),
            productId: currentChose.id,
            productSkuId: currentSku.id,
            quantity: buyNums,
            userId: getLoginStorage()['id']
        };
        try {
            const res = await addCarApi(senData);
            if (res.code === 20000) {
                if (isGoCar) { //跳转到立即购买
                    Router.push('/car');
                    return;
                }
                message.success('添加成功');
            } else {
                message.error(`${res.message || '添加失败'}`);
            }
        } catch (e) {
            message.error('接口异常');
        }
    };


    return (
        <div className={`${styles.goodsInfoWrap} fl`}>
            <h1 className={styles.goodsName}>{data.goodsName}</h1>
            <p className={styles.goodsDesc}>{data.goodsDesc}</p>
            <div className={styles.goodsPriceWrap}>
                <p>
                    <span className={styles.title}>售价</span>
                    <span className={styles.nowPrice}>¥{((currentSku['salePrice']) || 0) * buyNums}</span>
                    <span className={styles.marketPrice}>市场价 ¥{(currentSku['marketPrice'] || 0) * buyNums}</span>
                </p>
                <p>
                    <span className={styles.title}>税费</span>
                    <span>预估 ¥{currentSku.saleVolume || '0.00'}</span>
                </p>
                <p>
                    <span className={styles.title}>运费</span>
                    <span>{/*韩国至成都*/} ¥{data.freight || '0.00'}元</span>
                </p>
                <p>
                    <span className={styles.title}>销量</span>
                    <span>{currentSku['saleVolume']}</span>
                </p>
                <div className={styles.followWrap}
                     onClick={async () => {
                         if (!isCollection) {//未收藏
                             try {
                                 const res = await addCollectApi(data.id);
                                 if (res.code === 20000) {
                                     message.success('收藏成功');
                                     getIsCollection();
                                 } else {
                                     message.error(`${res.message || '收藏失败'}`);
                                 }
                             } catch (e) {
                                 message.error(`收藏接口异常`);
                             }
                         } else { //已收藏
                             ConfirmModal({
                                 title: '提示',
                                 constentText: '确定要取消收藏吗?',
                                 onOk: async () => {
                                     let resModal = Promise.reject();
                                     const res = await deleteCollectApi(data.id);
                                     if (res.code === 20000) {
                                         message.success('取消成功');
                                         getIsCollection();
                                         resModal = Promise.resolve();
                                     } else {
                                         message.error(`${res.message || '取消失败'}`);
                                     }
                                     return resModal;
                                 }
                             });
                         }
                     }}
                >
                    <img src={`/static/images/icons/${isCollection ? 'icon_follow.png' : 'icon_follow_un.png'}`}
                         className={styles.followIcon} alt=""/>
                    <span className={`black`}>{isCollection ? '已收藏' : '收藏'}</span>
                </div>
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
                <a className={`${styles.buyBtn} ${styles.buyNow}`}
                   onClick={() => addCar(true)}>立即购买</a>
                <a className={`${styles.buyBtn} ${styles.addCar}`} onClick={() => addCar()}>加入购物车</a>
            </div>
        </div>
    );
};


export default GoodsInfo;
