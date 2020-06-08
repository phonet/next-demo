import React from "react";
import HtmlHead from "../../components/HtmlHead";
import SearchArea from "../../components/SearchArea";
import UserCenterNav from "../../components/UserCenterNav";

/**
 * 实名认证
 * 2020/6/1 12:10 上午 BY TF
 */
const Authentication = () => {
    return (
        <>
            <HtmlHead title={'实名认证'}/>
            <SearchArea/>
            <div className={`bw`}>
                <div className={`contentWidth fcb`}>
                    <UserCenterNav router={'authentication'}/>
                    <div className={`userCenter fl`}>
                        实名认证
                    </div>
                </div>
            </div>
        </>
    )
}


export default Authentication;
