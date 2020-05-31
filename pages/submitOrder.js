import React from "react";
import HtmlHead from "../components/HtmlHead";
import SearchArea from "../components/SearchArea";
import Address from "../components/PageSubmitOrder/Address";
import GoodsArea from "../components/PageSubmitOrder/GoodsArea";

/**
 * 提交购物车
 * 2020/5/31 8:59 下午 BY TF
 */
const SubmitOrder = () => {
    return (
        <>
            <HtmlHead title={'提交订单'}/>
            <SearchArea noSearch={true}/>
            <div className={`bw`}>
                <Address/>
                <GoodsArea/>
            </div>
        </>
    )
}


export default SubmitOrder;
