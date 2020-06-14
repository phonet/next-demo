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
import MyCarousel from '../components/MyCarousel';
import request from '../util/request';
import {
    getAllCategoryApi,
    getBannerByPositionApi,
    getCategoryApi,
    getGoodsRecommendApi, getSpecialGoodsApi,
    getStoreAdApi
} from '../api/Api';

export default function Home({
                                 categoryList,
                                 swiperList,
                                 adAArea,
                                 adBArea,
                                 specialGoods,
                                 superGoodsList,
                                 shopAdList
                             }) {
    // console.log(categoryList)
    // console.log(swiperList)
    //console.log(adBArea);
    //console.log(specialGoods);
    console.log(superGoodsList);
    // console.log(adBArea);
    // console.log(shopAdList);
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
                    <AreaBShops list={shopAdList}
                                ad={adBArea}
                    />
                    <AreaCSpecial list={specialGoods}/>
                    <AreaDLike/>
                </div>
            </div>
        </>
    );
}


Home.getInitialProps = async (props) => {
    // const {isServer} = props.ctx;
    try {
        const res1 = await getAllCategoryApi().catch(e => ({})); //所有分类
        const res2 = await getBannerByPositionApi(1).catch(e => ({})); //首页轮播图
        const res3 = await getBannerByPositionApi(3).catch(e => ({})); //A区广告
        const res4 = await getBannerByPositionApi(4).catch(e => ({})); //B区广告
        const res5 = await getSpecialGoodsApi().catch(e => ({})); //专区
        const res6 = await getGoodsRecommendApi(1).catch(e => ({})); //超级单品
        const res7 = await getStoreAdApi().catch(e => ({}));

        /*        const ress = await Promise.race([
                    getAllCategoryApi().catch(e => {
                        return e;
                    }),
                    getBannerByPositionApi(1).catch(e => {
                        return e;
                    }),
                    getBannerByPositionApi(3).catch(e => {
                        return e;
                    }),
                    getBannerByPositionApi(4).catch(e => {
                        return e;
                    }),
                    getGoodsRecommendApi(2).catch(e => e),
                    getGoodsRecommendApi(1).catch(e => e)
                ]).then(res => {
                    console.log(res);
                    return {res}

                });
                console.log(ress);
                return {ress};*/
        // console.log(res1);
        //console.log(res2);
        console.log(res1);
        return {
            categoryList: res1.code === 20000 ? res1.data : [],
            swiperList: res2.code === 20000 ? res2.data : [],
            adAArea: res3.code === 20000 ? res3.data : [],
            adBArea: res4.code === 20000 ? res4.data : [],
            specialGoods: res5.code === 20000 ? res5.data : [],//专区商品
            superGoodsList: res6.code === 20000 ? res6.data : [],//超级单品
            shopAdList: res7.code === 20000 ? res7.data : []
        };
    } catch (e) {
        return {};
    }
};
