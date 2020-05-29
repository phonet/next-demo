import React from "react";
import HtmlHead from "../components/HtmlHead";
import SearchArea from "../components/SearchArea";
import BreadcrumbNav from "../components/BreadcrumbNav";
import GoodsImgPrev from "../components/GoodsDetailPage/GoodsImgPrev";
import GoodsInfo from "../components/GoodsDetailPage/GoodsInfo";

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
            <BreadcrumbNav showTotal={false}/>
            <div className={`fcb contentWidth`}>
                <GoodsImgPrev/>
                <GoodsInfo/>
            </div>
        </>
    )
}


export default GoodsDetail;
