import React, {Fragment, useEffect, useState} from 'react';
import styles from './index.less';
import {Input, message, Button} from 'antd';
import {useRouter} from 'next/router';
import {generateConfirmOrderApi} from '../../../api/Api';
import {getPicUrl} from '../../../util/Utils';

/**
 * 商品列表
 * 2020/5/31 10:00 下午 BY TF
 */
const GoodsArea = ({
                       onSubmit,
                       submitLoading
                   }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [confirmOrder, setConfirmOrder] = useState({});
    const [sendData, setSendData] = useState({});

    const getConfirmOrder = async () => {
        let cartIds = router.query && router.query.cartIds || '';
        if (!cartIds) return;
        cartIds = JSON.parse(cartIds);
        try {
            setLoading(true);
            const res = await generateConfirmOrderApi(cartIds);
            console.log(res);
            setLoading(false);
            if (res.code === 20000) {
                message.success('订单生成成功,请确认后提交订单');
                setConfirmOrder(res.data);
                const orderResults = res.data.orderResults || [];
                setSendData({
                    cartIds: cartIds,
                    memberReceiveAddressId: '',
                    payType: '',
                    storeNoteDTOS: orderResults.length ? orderResults.map(o => ({storeId: o.id, note: ''})) : []
                });
            } else {
                message.error(`${res.message || '接口异常'}`);
            }
        } catch (e) {
            message.error('接口异常');
            setLoading(false);
        }
    };

    useEffect(() => {
        getConfirmOrder();
    }, []);

    const orderResults = confirmOrder.orderResults || [];
    const calcAmount = confirmOrder.calcAmount || {};
    const storeNoteDTOS = sendData.storeNoteDTOS || [];

    return (
        <div className={`contentWidth ${styles.goodsAreaPage}`}>
            <div className={`${styles.title}`}>确认订单信息</div>
            <div className={`${styles.header} fcb`}>
                <span className={`${styles.goodsInfo} fl`}>商品信息</span>
                <span className={`${styles.goodsPrice} fl`}>单价(元)</span>
                <span className={`${styles.goodsNum} fl`}>数量</span>
                <span className={`${styles.money} fl`}>金额(元)</span>
            </div>
            {
                orderResults.length ?
                    orderResults.map((o, i) => {
                        const goodsDTOList = o.goodsDTOList || [];
                        return (
                            <Fragment key={o.id}>
                                <div className={styles.goodsTitle}>店铺：{o.storeName}</div>
                                <div className={styles.goodsBox}>
                                    {
                                        goodsDTOList.map(a => {
                                            const pic = o.goodsPic && JSON.parse(o.goodsPic) || [];
                                            const cartItemDTOS = a.cartItemDTOS || [];
                                            let productAttr = [];
                                            let tempObj = {};
                                            if (cartItemDTOS.length) {
                                                tempObj = cartItemDTOS.find(c => c.productId === a.id);
                                                productAttr = tempObj['productAttr'] && JSON.parse(tempObj['productAttr']);
                                            }
                                            return (
                                                <div className={`${styles.item} fcb`} key={a.id}>
                                                    <img className={`${styles.goodsImg} fl`}
                                                         src={getPicUrl(pic[0])}
                                                         alt=""/>
                                                    <div className={`${styles.goodsName} fl`}>
                                                        {a.goodsName}
                                                    </div>
                                                    <div className={`${styles.size} fl`}>
                                                        {
                                                            productAttr.map((c, j) => {
                                                                return (
                                                                    <p key={c.key}>{c.key}：{c.value} </p>
                                                                );
                                                            })
                                                        }
                                                    </div>
                                                    <div
                                                        className={`${styles.fontBold} ${styles.price} fl`}>￥{tempObj.price}</div>
                                                    <div
                                                        className={`${styles.fontBold}  ${styles.num} fl`}>{tempObj.quantity}</div>
                                                    <div
                                                        className={`${styles.fontBold} ${styles.money} fl`}>￥{tempObj.price * tempObj.quantity}</div>
                                                </div>
                                            );
                                        })
                                    }
                                    <div className={styles.yunFee}>
                                        <span className={`color6 f16`}>运费：</span>
                                        <span className={`red f16`}>￥{o.freight || '0.00'}</span>
                                    </div>
                                    <div className={`${styles.msgWrap} fcb`}>
                                        <div className={`fl fcb`}>
                                            <span className={`${styles.msgTitle} fl`}>给商家留言：</span>
                                            <div className={`fl ${styles.msgText}`}>
                                                <Input.TextArea rows={2}
                                                                placeholder={'选填，最多200字'}
                                                                value={storeNoteDTOS.length && storeNoteDTOS[i]['note']}
                                                                onChange={e => {
                                                                    setSendData({
                                                                        ...sendData,
                                                                        storeNoteDTOS: storeNoteDTOS.map((v, k) => {
                                                                            if (k === i) {
                                                                                v['note'] = e.target.value;
                                                                            }
                                                                            return {...v};
                                                                        })
                                                                    });
                                                                }}
                                                />
                                            </div>
                                        </div>
                                        <div className={`fr`}>
                                            <span>店铺合计(含运费)：</span>
                                            <span className={`f20 fwb red`}>￥{o.totalAmount || '0.00'}</span>
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                        );
                    })
                    :
                    <div className={`noData`}>空空如也</div>
            }
            <div className={`tr`}>
                <Button type={'primary'}
                        className={`${styles.submitOrder}`}
                        loading={submitLoading}
                        disabled={submitLoading || !orderResults.length}
                        onClick={() => {
                            onSubmit && onSubmit(sendData);
                        }}

                >
                    提交订单
                </Button>
            </div>
        </div>
    );
};


export default GoodsArea;
