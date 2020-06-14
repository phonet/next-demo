import React, {useCallback, useEffect, useState} from 'react';
import styles from './index.less';
import HtmlHead from '../../components/HtmlHead';
import SearchArea from '../../components/SearchArea';
import {Button, message, Spin} from 'antd';
import {getOrderDetailApi, getOrderPayQrcodeApi} from '../../api/Api';
import {useRouter} from 'next/router';
import Router from 'next/router';

/**
 * 订单支付结果页面
 * 2020/6/14 11:10 上午 BY TF
 */
const PayResult = () => {
    const [loading, setLoading] = useState(false);
    const [order, setOrder] = useState({});
    const router = useRouter();

    const getOrderResult = useCallback(async (type) => {
        let orderId = router.query && router.query.orderId || '';
        try {
            setLoading(true);
            const res = await getOrderDetailApi(orderId);
            setLoading(false);
            if (res.code === 20000) {
                setOrder(res.data);
            } else {
                message.error(`${res.message || '支付结果获取失败'}`);
            }
        } catch (e) {
            message.error(`接口异常`);
            setLoading(false);
        }

    }, []);

    useEffect(() => {
        getOrderResult();
    }, []);

    return (
        <Spin spinning={loading}>
            <HtmlHead title={'支付结果'}/>
            <SearchArea noSearch={true}/>
            <div className={`contentWidth`}>
                <div className={`${styles.payResult}`}>
                    <div className={styles.payResultTop}>
                        <img src="/static/images/icons/icon_success.png" width={50} height={50} alt=""/>
                        <span className={`f20 fwb black`}>您的订单已支付成功，我们将尽快为您打包发货</span>
                    </div>
                    <div className={`${styles.payInfoWrap} f16`}>
                        <div>订单编号： {order.orderSn || '--'}</div>
                        <div>支付金额：<span className={`red fwb`}>￥{order.totalAmount || '0.00'}</span></div>
                        <div>支付方式：{order.payType === 1 ? '支付宝' : order.payType === 2 ? '微信支付' : '未支付'}</div>
                    </div>
                    <div className={styles.btnWrap}>
                        <Button className={`${styles.btn} ${styles.blue}`} type={'primary'} onClick={() => {
                            Router.push('/car');
                        }}>返回购物车</Button>
                        <Button className={`${styles.btn} ${styles.gray}`}
                                onClick={() => {
                                    Router.push('/orderDetail');
                                }}
                        >查看订单</Button>
                    </div>
                </div>
            </div>
        </Spin>
    );
};


export default PayResult;
