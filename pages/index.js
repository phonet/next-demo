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
import {getAllCategoryApi, getBannerByPositionApi, getCategoryApi, getGoodsRecommendApi} from "../api/Api";

export default function Home({
                                 categoryList,
                                 swiperList,
                                 adAArea,
                                 adBArea,
                                 specialGoods,
                                 likeGoods
                             }) {
    // console.log(categoryList)
    // console.log(swiperList)
    console.log(adAArea)
    console.log(adBArea);
    console.log(specialGoods);
    console.log(likeGoods)
    return (
        <>
            <HtmlHead title={'世贸云'}/>
            <SearchArea/>
            <TopNav categoryList={categoryList}/>
            <MyCarousel swiperList={swiperList}/>
            <Warranty/>
            <div className={`${styles.homeContent}`}>
                <div className={`contentWidth`}>
                    <AreaAGoods list={adAArea}/>
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
        const res1 = await getAllCategoryApi();
        const res2 = await getBannerByPositionApi(1);
        const res3 = await getBannerByPositionApi(3);
        const res4 = await getBannerByPositionApi(4);
        const res5 = await getGoodsRecommendApi(2);
        const res6 = await getGoodsRecommendApi(1);
        // console.log(res3)
        return {
            categoryList: res1.code === 20000 ? res1.data : [],
            swiperList: res2.code === 20000 ? res2.data : [],
            adAArea: res3.code === 20000 ? res3.data : [],
            adBArea: res4.code === 20000 ? res4.data : [],
            specialGoods: res5.code === 20000 ? res5.data : [],
            likeGoods: res6.code === 20000 ? res6.data : [],
        }
    } catch (e) {
        return {}
    }
};
