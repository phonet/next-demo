import React from 'react';
import styles from './index.less';
import {getFormatTime, getPicUrl, phoneFormat} from '../../../util/Utils';

/**
 * 物流信息
 * 2020/6/1 2:34 上午 BY TF
 */
const Logistics = ({
                       data = {}
                   }) => {

    const productInfo = data.productInfo || [];
    return (
        <>
            {/*<div className={styles.wrap}>
                <div className={styles.header}>
                    <span className={`black`}>物流信息</span>
                </div>
                <div className={styles.content}>
                    <div><span className={styles.title}>物流公司：</span> 韵达快递</div>
                    <div><span className={styles.title}>运单号码：</span> 4305347834631</div>
                    <div className={`fcb`}>
                        <span className={`${styles.title} fl`}>物流跟踪：</span>
                        <div className={'fl'}>
                            2020-05-08 12:25:25包裹正在等待揽收<br/>
                            2020-05-08 16:05:22【金华市】韵达快递 浙江浦江县公司浦江服务部收件员 已揽件<br/>
                            2020-05-08 16:15:20【金华市】浙江浦江县公司 已发出<br/>
                            2020-05-08 18:18:41【金华市】快件已到达 浙江义乌分拨中心<br/>
                            2020-05-08 18:22:35【金华市】浙江义乌分拨中心 已发出<br/>
                            2020-05-10 01:37:24【成都市】快件已到达 四川成都分拨中心<br/>
                            2020-05-10 03:39:33【成都市】四川成都分拨中心 已发出<br/>
                            2020-05-10 13:35:02【成都市】四川成都郫县西区公司犀浦镇成都后花园分部派件员：黄杰 电话：18380259022 当前正在为您派件<br/>
                            2020-05-10 14:29:46【成都市】四川成都郫县西区公司 已发出<br/>

                        </div>
                    </div>
                </div>
            </div>*/}
            <div className={styles.wrap}>
                <div className={styles.header}>
                    <span className={`black`}>订单信息</span>
                </div>
                <div className={styles.content}>
                    <div><span
                        className={styles.title}>收货地址： </span> {data.receiverName} {phoneFormat(data.receiverPhone)} {data.receiverDetailAddress}
                    </div>
                    <div><span className={styles.title}>创建时间：</span> {getFormatTime(data.createTime)}</div>
                    <div><span className={styles.title}>订单号：</span> {data.orderSn}</div>
                    <div><span
                        className={styles.title}>{data.payType === 1 ? '支付宝' : '微信'}交易号：</span> {data.payOrderPaymentCode || '--'}
                    </div>
                    <div><span className={styles.title}>支付金额：</span> ￥{data.payAmount || '0.00'}</div>
                    <div><span className={styles.title}>支付时间：</span> {getFormatTime(data.paymentTime)}</div>
                </div>
            </div>
            <div className={styles.wrap}>
                <div className={styles.header}>
                    <span className={styles.goodsInfo}>商品信息</span>
                    <span className={`${styles.price} black`}>单价</span>
                    <span className={`${styles.num} black`}>数量</span>
                    <span className={`${styles.money} black`}>金额(元)</span>
                </div>
                <div className={`${styles.content}`}>
                    {
                        productInfo.length ?
                            productInfo.map((o, i) => {
                                const goodsPic = o.goodsPic || [];
                                const cartItemDTOS = o.cartItemDTOS || [];
                                const currentGoods = cartItemDTOS.find(a => a.productId === o.id) || {};
                                const productAttr = currentGoods.productAttr && JSON.parse(currentGoods.productAttr) || {};
                                return (
                                    <div className={`${styles.goodsItem} fcb`} key={i}>
                                        <img className={`${styles.goodsImg} fl`} src={getPicUrl(goodsPic[0])}
                                             alt=""/>
                                        <div className={`${styles.goodsName} fl`}>{o.goodsName}</div>
                                        <div className={`${styles.size} gary fl`}>
                                            {
                                                productAttr.map(v => {
                                                    return (
                                                        <p key={v.key}>{v.key}：{v.value}</p>
                                                    );
                                                })
                                            }
                                        </div>
                                        <div className={`${styles.goodsPrice} fl`}>￥{currentGoods.price}</div>
                                        <div className={`${styles.goodsNum} fl`}>{currentGoods.quantity}</div>
                                        <div
                                            className={`${styles.goodsMoney} fl`}>￥{(currentGoods.quantity || 0) * (currentGoods.price || 0)}</div>
                                    </div>
                                );
                            })
                            :
                            <div className={'noData'}>暂无数据</div>
                    }
                    <div className={`tr`}>
                        <span className={`color6`}>运费：<span
                            className={`f16 fwb black`}>￥{data.freightAmount || '0.00'}</span></span><br/>
                        <span className={`color6`}>税费：<span
                            className={`f16 fwb black`}>￥{data.taxesFees || '0.00'}</span></span>
                    </div>
                    <div className={`${styles.bottom} fcb`}>
                        <span className={`fl`}>店铺：{data.storeName}</span>
                        <span className={`color6 fr`}>合计：<span className={`f20 fwb red`}>￥{data.payAmount || '0.00'}</span></span>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Logistics;
