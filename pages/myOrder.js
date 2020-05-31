import React from "react";
import HtmlHead from "../components/HtmlHead";
import SearchArea from "../components/SearchArea";
import UserCenterNav from "../components/UserCenterNav";
import MyOrderList from "../components/MyOrderList";

/**
 * 我的订单
 * 2020/6/1 12:04 上午 BY TF
 */
const MyOrder = () => {
    return (
        <>
            <HtmlHead title={'我的订单'}/>
            <SearchArea/>
            <div className={`bw`}>
                <div className={`contentWidth fcb`}>
                    <UserCenterNav/>
                    <div className={`fl`} style={{width: 1120, overflow: 'hidden'}}>
                        <MyOrderList/>
                    </div>
                </div>
            </div>
        </>
    )
}


export default MyOrder;
