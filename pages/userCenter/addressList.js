import React from "react";
import HtmlHead from "../../components/HtmlHead";
import SearchArea from "../../components/SearchArea";
import UserCenterNav from "../../components/UserCenterNav";
import MyOrderList from "../../components/MyOrderList";
import MyAddressList from "../../components/MyAddressList";

/**
 * 收货地址
 * 2020/6/1 12:06 上午 BY TF
 */
const AddressList = () => {
    return (
        <>
            <HtmlHead title={'我的收货地址'}/>
            <SearchArea/>
            <div className={`bw`}>
                <div className={`contentWidth fcb`}>
                    <UserCenterNav router={'addressList'}/>
                    <div className={`userCenter fl`}>
                        <MyAddressList/>
                    </div>
                </div>
            </div>
        </>
    )
}


export default AddressList;
