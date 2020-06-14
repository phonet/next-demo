import React, {useCallback, useEffect, useState} from 'react';
import OrderStep from '../components/PageOrderDetail/OrderStep';
import Logistics from '../components/PageOrderDetail/Logistics';
import {getOrderDetailApi, getOrderItemDetailApi} from '../api/Api';
import {useRouter} from 'next/router';
import {message, Spin} from 'antd';

/**
 * 订单详情
 * 2020/6/1 1:55 上午 BY TF
 */
const OrderDetail = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});
    const router = useRouter();

    const getOrderDetail = useCallback(async () => {
        try {
            setLoading(true);
            let orderId = router.query && router.query.orderId || '';
            const res = await getOrderItemDetailApi(orderId);
            setLoading(false);
            if (res.code === 20000) {
                setData(res.data);
            } else {
                message.error(`${res.message || '详情获取失败'}`);
            }
        } catch (e) {
            setLoading(false);
            message.error('接口异常');
        }
    }, []);

    useEffect(() => {
        getOrderDetail();
    }, []);


    return (
        <Spin spinning={loading}>
            <div className={`contentWidth`}>
                <OrderStep status={data.status}/>
                <Logistics data={data}/>
            </div>
        </Spin>
    );
};


export default OrderDetail;
