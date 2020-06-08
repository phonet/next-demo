import React, {useEffect, useState} from "react";
import styles from './index.less';
import {message, Tabs} from "antd";
import List from "./List";
import {getOrderListApi} from "../../api/Api";

const TabPane = Tabs.TabPane;

/**
 * 我的订单列表
 * 2020/6/1 12:31 上午 BY TF
 */
const MyOrderList = () => {
    const [loading, setLoading] = useState(false)
    const [params, setParams] = useState({orderstatus: '', keyWord: ''});
    const [list, setList] = useState([]);

    //获取订单列表
    const getOrderList = async () => {
        try {
            const res = await getOrderListApi(params);
            if (res.code === 20000) {
                setList(res.data)
            } else {
                message.error('订单获取失败');
            }
        } catch (e) {
            message.error('订单获取异常');
        }
    }
    useEffect(() => {
        getOrderList();
    }, [params]);

    return (
        <>
            <Tabs defaultActiveKey="1"
                  activeKey={params.orderstatus}
                  onChange={(key) => {
                      setParams({...params, orderstatus: key, keyWord: ''});
                  }}>
                <TabPane tab="所有订单" key="">
                    <List list={list}
                          onSearch={(val) => {
                              setParams({...params, keyWord: val})
                          }}
                    />
                </TabPane>
                <TabPane tab="待付款" key="0">
                    <List list={list}
                          onSearch={(val) => {
                              setParams({...params, keyWord: val})
                          }}
                    />
                </TabPane>
                <TabPane tab="代发货" key="1">
                    <List list={list}
                          onSearch={(val) => {
                              setParams({...params, keyWord: val})
                          }}
                    />
                </TabPane>
                <TabPane tab="待收货" key="2">
                    <List list={list}
                          onSearch={(val) => {
                              setParams({...params, keyWord: val})
                          }}
                    />
                </TabPane>
            </Tabs>
        </>
    )
}


export default MyOrderList;
