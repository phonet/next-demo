import React from "react";
import OrderStep from "../components/PageOrderDetail/OrderStep";
import Logistics from "../components/PageOrderDetail/Logistics";

/**
 * 订单详情
 * 2020/6/1 1:55 上午 BY TF
 */
const OrderDetail = () => {
    return (
        <>
            <div className={`contentWidth`}>
                <OrderStep/>
                <Logistics/>
            </div>
        </>
    )
}


export default OrderDetail;
