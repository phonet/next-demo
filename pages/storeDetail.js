import React from "react";
import HtmlHead from "../components/HtmlHead";
import SearchArea from "../components/SearchArea";
import BreadcrumbNav from "../components/BreadcrumbNav";
import GoodsImgPrev from "../components/GoodsDetailPage/GoodsImgPrev";
import GoodsInfo from "../components/GoodsDetailPage/GoodsInfo";
import GoodsDetails from "../components/GoodsDetailPage/GoodsDetails";
import MyCarousel from "../components/MyCarousel";
import StoreLogo from "../components/StoreDetailPage/StoreLogo";
import StoreGoods from "../components/StoreDetailPage/StoreGoods";


/**
 * 商户详情页面
 * 2020/5/31 3:43 下午 BY TF
 */
const StoreDetail = () => {
    return (
        <>
            <HtmlHead title={'商户详情'}/>
            <SearchArea/>
            <div className={`bw`}>
                <BreadcrumbNav showTotal={false}/>
            </div>
            <StoreLogo/>
            <MyCarousel imgHeight={500}/>
            <div className={`bw`}>
                <StoreGoods/>
            </div>
        </>
    )
}


export default StoreDetail;
