import React, {useEffect, useState} from 'react';
import styles from './index.less';
import {message, Tabs} from 'antd';
import List from './List';
import {confirmReceiveGoodsAPi, getOrderListApi} from '../../api/Api';

const TabPane = Tabs.TabPane;

/**
 * 我的订单列表
 * 2020/6/1 12:31 上午 BY TF
 */
const MyOrderList = () => {
    const [loading, setLoading] = useState(false);
    const [params, setParams] = useState({orderStatus: '', keyWord: '', page: 0, size: 999, sort: 'id,desc'});
    const [list, setList] = useState([]);

    //获取订单列表
    const getOrderList = async () => {
        try {
            setLoading(true);
            const res = await getOrderListApi(params);
            setLoading(false);
            if (res.code === 20000) {
                setList(res.data);
            } else {
                message.error('订单获取失败');
                setList([]);
            }
        } catch (e) {
            message.error('订单获取异常');
            setLoading(false);
            setList([]);
        }
    };
    useEffect(() => {
        getOrderList();
    }, [params]);

    const confirmReceiveGoods = async (orderId) => {
        try {
            const res = await confirmReceiveGoodsAPi({orderId});
            if (res.code === 20000) {
                message.success('确认收货成功');
                getOrderList();
            } else {
                message.success(`${res.message || '确认收货成功'}`);
            }
        } catch (e) {
            message.error('接口异常');
        }
    };

    return (
        <>
            <Tabs defaultActiveKey="1"
                  activeKey={params.orderStatus}
                  onChange={(key) => {
                      setParams({...params, orderStatus: key, keyWord: ''});
                  }}>
                <TabPane tab="所有订单" key="">
                    <List list={list}
                          loading={loading}
                          onConfirmReceiveGoods={confirmReceiveGoods}
                          onSearch={(val) => {
                              setParams({...params, keyWord: val});
                          }}
                    />
                </TabPane>
                <TabPane tab="待付款" key="0">
                    <List list={list}
                          loading={loading}
                          onConfirmReceiveGoods={confirmReceiveGoods}
                          onSearch={(val) => {
                              setParams({...params, keyWord: val});
                          }}
                    />
                </TabPane>
                <TabPane tab="待发货" key="1">
                    <List list={list}
                          onConfirmReceiveGoods={confirmReceiveGoods}
                          loading={loading}
                          onSearch={(val) => {
                              setParams({...params, keyWord: val});
                          }}
                    />
                </TabPane>
                <TabPane tab="待收货" key="2">
                    <List list={list}
                          loading={loading}
                          onConfirmReceiveGoods={confirmReceiveGoods}
                          onSearch={(val) => {
                              setParams({...params, keyWord: val});
                          }}
                    />
                </TabPane>
            </Tabs>
        </>
    );
};


export default MyOrderList;
