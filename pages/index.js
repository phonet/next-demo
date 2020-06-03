import React from 'react';
import AreaAGoods from '../components/HomePage/AreaAGoods';
import AreaBShops from '../components/HomePage/AreaBShops';
import AreaCSpecial from '../components/HomePage/AreaCSpecial';
import AreaDLike from '../components/HomePage/AreaDLike';
import SuperGoods from '../components/HomePage/SuperGoods';
import HtmlHead from '../components/HtmlHead';
import SearchArea from '../components/SearchArea';
import TopNav from '../components/TopNav';
import Warranty from '../components/Warranty';
import styles from '../static/styles/index.less';
import MyCarousel from "../components/MyCarousel";
import request from "../util/request";
import {getBannerByPositionApi, getCategoryApi, getGoodsRecommendApi} from "../api/Api";

export default function Home({
                                 categoryList,
                                 swiperList,
                                 goodsRecommendList
                             }) {
    console.log(categoryList)
    console.log(swiperList)
    console.log(goodsRecommendList)
    return (
        <>
            <HtmlHead title={'世贸云'}/>
            <SearchArea/>
            <TopNav/>
            <MyCarousel/>
            <Warranty/>
            <div className={`${styles.homeContent}`}>
                <div className={`contentWidth`}>
                    <AreaAGoods/>
                    <SuperGoods/>
                    <AreaBShops/>
                    <AreaCSpecial/>
                    <AreaDLike/>
                </div>
            </div>
        </>
    );
}


Home.getInitialProps = async (props) => {
    // const {isServer} = props.ctx;
    try {
        const res1 = await getCategoryApi(1);
        const res2 = await getBannerByPositionApi(1);
        const res3 = await getGoodsRecommendApi();
        // console.log(res3)
        return {
            categoryList: res1,
            swiperList: res2,
            goodsRecommendList: res3
        }
    } catch (e) {
        return {}
    }
};
