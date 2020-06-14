import React from 'react';
import styles from './index.less';
import {getFormatTime, getPicUrl} from '../../../util/Utils';
import {Button} from 'antd';
import {goGoodsDetails, goOrderDetail, goPayPage} from '../../../util/RouterPage';

/**
 * 订单项
 * 2020/6/1 12:53 上午 BY TF
 */
const ListItem = ({
                      item,
                      confirmReceiveGoods
                  }) => {
    const productInfo = item.productInfo || [];
    return (
        <div className={styles.orderItem}>
            <div className={`${styles.header} fcb`}>
                <span className={`gray fl`}>订单号: {item.orderSn}<span
                    className={styles.orderSnGap}/>创建时间：{getFormatTime(item.createTime)}</span>
                <span className={`black fr`}>店铺：{item.storeName}</span>
            </div>
            <div className={`fcb`}>
                <div className={`${styles.leftWrap} fl`}>
                    {
                        productInfo.length > 0 ?
                            productInfo.map((o, i) => {
                                const goodsPic = o.goodsPic || [];
                                const cartItemDTOS = o.cartItemDTOS || [];
                                const currentGoods = cartItemDTOS.find(a => a.productId === o.id) || {};
                                const productAttr = currentGoods.productAttr && JSON.parse(currentGoods.productAttr) || {};

                                return (
                                    <div className={`${styles.itemInner} fcb`} key={i}>
                                        <img className={`${styles.goodsImg} fl`} src={getPicUrl(goodsPic[0])}
                                             alt=""/>
                                        <div className={`${styles.goodsName} black fl`}>
                                            {o.goodsName}
                                        </div>
                                        <div className={`${styles.size} gray fl`}>
                                            {
                                                productAttr.map(v => {
                                                    return (
                                                        <p key={v.value}>{v.key}：{v.value}</p>
                                                    );
                                                })
                                            }
                                        </div>
                                        <div className={`${styles.price} fl black`}>￥{currentGoods.price}</div>
                                        <div className={`${styles.num} fl black`}>{currentGoods.quantity}</div>
                                    </div>
                                );
                            })
                            :
                            <div className={`noData`}>暂无商品</div>
                    }
                </div>
                <div className={`${styles.ralPay} fl`} style={{height: productInfo.length * 90}}>
                    <div className={styles.content}>
                        <span className={`red`}>￥{item.payAmount}</span><br/>
                        <span className={`color6`}>(含运费、税费)</span>
                    </div>
                </div>
                <div className={`${styles.ralPay} fl`} style={{height: productInfo.length * 90}}>
                    <div className={styles.content}>
                        <div className={`color6`}>
                            {
                                item.status === 0 ? '等待买家付款' :
                                    item.status === 1 ? '等待商家发货' :
                                        item.status === 2 ? '商家已发货' :
                                            item.status === 3 ? '交易成功' :
                                                item.status === 4 ? '交易关闭' :
                                                    item.status === 5 ? '无效订单'
                                                        : ''
                            }
                        </div>
                        <a className={`color6`} onClick={() => goOrderDetail(item.id)}>订单详情</a>
                    </div>
                </div>
                <div className={`${styles.action} fl`} style={{height: productInfo.length * 90}}>
                    <div className={styles.content}>
                        {
                            item.status === 0 ?
                                <>
                                    <Button type={'primary'}
                                            className={`${styles.btn} ${styles.blue}`}
                                            size={'small'}
                                            onClick={() => goPayPage(item.id)}
                                    >
                                        立即付款
                                    </Button>
                                    <br/>
                                    {/*<span>1小时30分后<br/> 自动取消</span>*/}
                                </>
                                :
                                item.status === 1 ?
                                    <a className={`color6`}>再次购买</a>
                                    /*<a className={`color6`}>取消订单</a> */ :
                                    item.status === 2 ?
                                        <>
                                            <Button type={'primary'}
                                                    onClick={() => confirmReceiveGoods && confirmReceiveGoods(item.id)}
                                                    className={`${styles.btn} ${styles.yellow}`}
                                                    size={'small'}>确认收货</Button><br/>
                                            {/*<span>还剩2天17时<br/> 自动取消</span>*/}
                                        </> :
                                        item.status === 3 ? '' :
                                            item.status === 4 ?
                                                <a className={`color6`} onClick={() => goGoodsDetails()}>再次购买</a>
                                                : ''
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};


export default ListItem;
