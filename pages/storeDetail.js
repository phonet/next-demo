import React from 'react';
import HtmlHead from '../components/HtmlHead';
import SearchArea from '../components/SearchArea';
import BreadcrumbNav from '../components/BreadcrumbNav';
import GoodsImgPrev from '../components/GoodsDetailPage/GoodsImgPrev';
import GoodsInfo from '../components/GoodsDetailPage/GoodsInfo';
import GoodsDetails from '../components/GoodsDetailPage/GoodsDetails';
import MyCarousel from '../components/MyCarousel';
import StoreLogo from '../components/StoreDetailPage/StoreLogo';
import StoreGoods from '../components/StoreDetailPage/StoreGoods';
import {
    getAllCategoryApi,
    getBrandListByCategoryIdApi,
    getStoreBannerApi,
    getStoreGoodsListApi,
    getStoreInfoApi
} from '../api/Api';
import CategoryGoodsList from './categoryGoodsList';


/**
 * 商户详情页面
 * 2020/5/31 3:43 下午 BY TF
 */
const StoreDetail = ({
                         goodsList,
                         storeInfo,
                         banners
                     }) => {
    // console.log(goodsList);
    // console.log(storeInfo);
    console.log(banners);
    return (
        <>
            <HtmlHead title={'商户详情'}/>
            <SearchArea/>
            {/*<div className={`bw`}>
                <BreadcrumbNav showTotal={false}/>
            </div>*/}
            <StoreLogo data={storeInfo}/>
            {
                banners.length ?
                    <MyCarousel imgHeight={500}
                                swiperList={banners}
                    />
                    : null
            }
            <div className={`bw`}>
                <StoreGoods list={goodsList}/>
            </div>
        </>
    );
};


StoreDetail.getInitialProps = async (props) => {
    try {
        const {storeId} = props.query;
        const res = await getStoreGoodsListApi({
            page: 0,
            size: 9999,
            storeId: storeId
        }).catch(e => ({}));
        const res1 = await getStoreInfoApi(storeId).catch(e => ({}));
        //轮播图
        const banners = await getStoreBannerApi(storeId).catch(e => ({}));
        // const goodsList = await getGoodsList({page: 0, size: 9999, thirdCategoryId: categoryId});
        return {
            //categoryList: res1.code === 20000 ? res1.data : [],
            //allBrand: allBrand.code === 20000 ? allBrand.data : [],
            goodsList: res.code === 20000 ? res.data : [],
            storeInfo: res1.code === 20000 ? res1.data : [],
            storeId: storeId,
            banners: banners.code === 20000 ? banners.data : [],
        };
    } catch (e) {

    }
};


export default StoreDetail;
