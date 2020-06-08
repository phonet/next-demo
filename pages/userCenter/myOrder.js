import React, {useEffect, useRef, useState} from "react";
import HtmlHead from "../../components/HtmlHead";
import SearchArea from "../../components/SearchArea";
import UserCenterNav from "../../components/UserCenterNav";
import MyOrderList from "../../components/MyOrderList";
import {message} from "antd";
import {getOrderListApi} from "../../api/Api";

//此处不需要服务端渲染
/*MyOrderList.getInitialProps = async (props) => {
    console.log('1111')
    return props;
}*/

//模拟didmount生命周期
const didMount = (callback) => {
    const savedCallback = useRef();
    useEffect(() => {
        callback && callback(getOrderList());
    }, []);
}

/**
 * 我的订单
 * 2020/6/1 12:04 上午 BY TF
 */
const MyOrder = (props) => {
    /*didMount((res) => {
        console.log(res)
        setList(res);
    });*/

    return (
        <>
            <HtmlHead title={'我的订单'}/>
            <SearchArea/>
            <div className={`bw`}>
                <div className={`contentWidth fcb`}>
                    <UserCenterNav router={'myOrder'}/>
                    <div className={`userCenter fl`}>
                        <MyOrderList/>
                    </div>
                </div>
            </div>
        </>
    )
}


export default MyOrder;
