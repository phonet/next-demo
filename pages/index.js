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
                                 superGoodsList
                             }) {
    // console.log(categoryList)
    // console.log(swiperList)
    console.log(adBArea);
    console.log(specialGoods);
    // console.log(superGoodsList)
    return (
        <>
            <HtmlHead title={'世贸云'}/>
            <SearchArea/>
            <TopNav categoryList={categoryList}
                    current={'index'}
            />
            <MyCarousel swiperList={swiperList}/>
            <Warranty/>
            <div className={`${styles.homeContent}`}>
                <div className={`contentWidth`}>
                    <AreaAGoods list={adAArea}/>
                    <SuperGoods list={superGoodsList}/>
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
        const res1 = await getAllCategoryApi(); //所有分类
        const res2 = await getBannerByPositionApi(1); //首页轮播图
        const res3 = await getBannerByPositionApi(3); //A区广告
        const res4 = await getBannerByPositionApi(4); //B区广告
        const res5 = await getGoodsRecommendApi(2); //专区
        const res6 = await getGoodsRecommendApi(1); //超级单品
        // console.log(res3)
        return {
            categoryList: res1.code === 20000 ? res1.data : [],
            swiperList: res2.code === 20000 ? res2.data : [],
            adAArea: res3.code === 20000 ? res3.data : [],
            adBArea: res4.code === 20000 ? res4.data : [],
            specialGoods: res5.code === 20000 ? res5.data : [],//专区商品
            superGoodsList: res6.code === 20000 ? res6.data : [],//超级单品
        }
    } catch (e) {
        return {}
    }
};
