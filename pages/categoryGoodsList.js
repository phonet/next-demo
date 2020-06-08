import React from 'react';
import BrandNav from '../components/BrandNav/index.js';
import BreadcrumbNav from '../components/BreadcrumbNav';
import FilterBar from '../components/FilterBar/index.js';
import GoodsList from '../components/GoodsList/index.js';
import HtmlHead from '../components/HtmlHead';
import SearchArea from '../components/SearchArea';
import TopNav from '../components/TopNav';
import {getAllCategoryApi} from '../api/Api';

/**
 * 商品列表
 * 2020/5/20 1:06 上午 BY TF
 * @returns {*}
 * @constructor
 */
const CategoryGoodsList = ({
                               categoryList = []
                           }) => {
    return (
        <>
            <HtmlHead title={'商品列表'}/>
            <SearchArea/>
            <TopNav hoverShow={true}
                    current={'index'}
                    categoryList={categoryList}
            />
            <BreadcrumbNav/>
            <BrandNav/>
            <FilterBar/>
            <GoodsList/>
        </>
    );
};

CategoryGoodsList.getInitialProps = async (props) => {
    try {
        const res1 = await getAllCategoryApi(); //所有分类
        return {
            categoryList: res1.code === 20000 ? res1.data : [],
        };
    } catch (e) {

    }
};

export default CategoryGoodsList;
