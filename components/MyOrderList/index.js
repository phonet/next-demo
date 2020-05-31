import React from "react";
import styles from './index.less';
import {Tabs} from "antd";
import List from "./List";

const TabPane = Tabs.TabPane;

/**
 * 我的订单列表
 * 2020/6/1 12:31 上午 BY TF
 */
const MyOrderList = () => {
    return (
        <>
            <Tabs defaultActiveKey="1" onChange={() => {}}>
                <TabPane tab="所有订单" key="1">
                    <List/>
                </TabPane>
                <TabPane tab="待付款" key="2">
                    <List/>
                </TabPane>
                <TabPane tab="代发货" key="3">
                    <List/>
                </TabPane>
                <TabPane tab="待收货" key="4">
                    <List/>
                </TabPane>
            </Tabs>
        </>
    )
}


export default MyOrderList;
