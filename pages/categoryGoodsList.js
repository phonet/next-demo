import React, {useEffect, useState} from 'react';
import BrandNav from '../components/BrandNav/index.js';
import BreadcrumbNav from '../components/BreadcrumbNav';
import FilterBar from '../components/FilterBar/index.js';
import GoodsList from '../components/GoodsList/index.js';
import HtmlHead from '../components/HtmlHead';
import SearchArea from '../components/SearchArea';
import TopNav from '../components/TopNav';
import {getAllCategoryApi, getBrandListByCategoryIdApi, getGoodsListApi} from '../api/Api';
import {message} from 'antd';
import {getGoodsCategory} from '../util/Utils';

/**
 * 商品列表
 * 2020/5/20 1:06 上午 BY TF
 * @returns {*}
 * @constructor
 */
const CategoryGoodsList = ({
                               categoryList = [],
                               allBrand = [],
                               goodsList = [],
                               categoryId
                           }) => {
    const [sendData, setSendData] = useState({});
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState(goodsList);


    useEffect(() => {
        if (!_.isEmpty(sendData)) {
            // console.log(sendData);
            setLoading(true);
            getGoodsList({...sendData, page: 0, size: 9999,thirdCategoryId: categoryId}).then(res => {
                setLoading(false);
                setList(res);
            });
        }
    }, [sendData]);
    // console.log(goodsList);
    return (
        <>
            <HtmlHead title={'商品列表'}/>
            <SearchArea/>
            <TopNav hoverShow={true}
                    current={'index'}
                    categoryList={categoryList}
            />
            <BreadcrumbNav totalNum={list.length}
                           categoryStr={list.length ? getGoodsCategory(list[0]['goodsCategoryDTO']) : ''}
            />
            <BrandNav list={allBrand}
                      onSearch={brandId => {
                          setSendData({...sendData, brandId: brandId});
                      }}
            />
            <FilterBar onSearch={params => {
                // console.log(params);
                setSendData({...sendData, ...params});
            }}/>
            <GoodsList list={list}
                       loading={loading}
            />
        </>
    );
};

//获取商品列表
const getGoodsList = async (sendData) => {
    let resArr = [];
    try {
        const res = await getGoodsListApi(sendData).catch(e => ([]));
        if (res.code === 20000) {
            resArr = res.data;
        } else {
            message.error(`${res.message || '商品列表获取失败'}`);
        }
    } catch (e) {
        message.error('商品列表接口异常');
    }
    return resArr;
};

CategoryGoodsList.getInitialProps = async (props) => {
    try {
        const res1 = await getAllCategoryApi().catch(e => ({})); //所有分类
        const {categoryId} = props.query;
        const allBrand = await getBrandListByCategoryIdApi({
            page: 0,
            size: 999,
            thirdCategoryId: categoryId
        }).catch(e => ({}));
        const goodsList = await getGoodsList({page: 0, size: 9999, thirdCategoryId: categoryId});
        return {
            categoryList: res1.code === 20000 ? res1.data : [],
            allBrand: allBrand.code === 20000 ? allBrand.data : [],
            goodsList,
            categoryId: categoryId
        };
    } catch (e) {

    }
};

export default CategoryGoodsList;
