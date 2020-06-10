import React from 'react';
import HtmlHead from '../components/HtmlHead';
import SearchArea from '../components/SearchArea';
import BreadcrumbNav from '../components/BreadcrumbNav';
import GoodsImgPrev from '../components/GoodsDetailPage/GoodsImgPrev';
import GoodsInfo from '../components/GoodsDetailPage/GoodsInfo';
import GoodsDetails from '../components/GoodsDetailPage/GoodsDetails';
import {getGoodsDetailApi, getStoreGoodsListApi} from '../api/Api';
import {getGoodsCategory} from '../util/Utils';

/**
 * 商品详情页面
 * @returns {*}
 * @constructor
 */
const GoodsDetail = ({
                         goodsDetail = {},
                         storeGoods = {}
                     }) => {
    console.log(storeGoods);
    console.log(goodsDetail);
    return (
        <>
            <HtmlHead title={'商品详情'}/>
            <SearchArea/>
            <div className={`bw`}>
                <BreadcrumbNav showTotal={false}
                               categoryStr={getGoodsCategory(goodsDetail.goodsCategoryDTO)}
                />
                <div className={`fcb contentWidth`}>
                    <GoodsImgPrev list={goodsDetail.goodsPic || []}/>
                    <GoodsInfo data={goodsDetail}/>
                </div>
                <GoodsDetails goodsDetail={goodsDetail}
                              storeGoods={storeGoods}
                />
            </div>
        </>
    );
};


GoodsDetail.getInitialProps = async (props) => {
    console.log(props.query);
    const {storeId, goodsId} = props.query || {};
    let goodsDetail = {};
    let storeGoods = {};
    if (goodsId) {
        goodsDetail = await getGoodsDetailApi(goodsId).catch(e => ({}));
    }
    if (storeId) {
        storeGoods = getStoreGoodsListApi({storeId: storeId, page: 0, size: 999}).catch(e => {
        });
    }
    return {
        goodsDetail: goodsDetail.code === 20000 && goodsDetail.data || {},
        storeGoods: storeGoods.code === 20000 && storeGoods.data || []
    };

};

export default GoodsDetail;
