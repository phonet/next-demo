import React from "react";
import HtmlHead from "../components/HtmlHead";
import SearchArea from "../components/SearchArea";
import BreadcrumbNav from "../components/BreadcrumbNav";
import GoodsImgPrev from "../components/GoodsDetailPage/GoodsImgPrev";
import GoodsInfo from "../components/GoodsDetailPage/GoodsInfo";
import GoodsDetails from "../components/GoodsDetailPage/GoodsDetails";

/**
 * 商品详情页面
 * @returns {*}
 * @constructor
 */
const GoodsDetail = () => {
    return (
        <>
            <HtmlHead title={'商品详情'}/>
            <SearchArea/>
            <div className={`bw`}>
                <BreadcrumbNav showTotal={false}/>
                <div className={`fcb contentWidth`}>
                    <GoodsImgPrev/>
                    <GoodsInfo/>
                </div>
                <GoodsDetails/>
            </div>
        </>
    )
}


export default GoodsDetail;
