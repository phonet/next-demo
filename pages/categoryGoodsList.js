import React from 'react';
import BrandNav from '../components/BrandNav/index.js';
import BreadcrumbNav from '../components/BreadcrumbNav';
import FilterBar from '../components/FilterBar/index.js';
import GoodsList from '../components/GoodsList/index.js';
import HtmlHead from '../components/HtmlHead';
import SearchArea from '../components/SearchArea';
import TopNav from '../components/TopNav';

/**
 * 商品列表
 * 2020/5/20 1:06 上午 BY TF
 * @returns {*}
 * @constructor
 */
const CategoryGoodsList = () => {
	return (
		<>
			<HtmlHead title={'商品列表'}/>
			<SearchArea/>
			<TopNav hoverShow={true}/>
			<BreadcrumbNav/>
			<BrandNav/>
			<FilterBar/>
			<GoodsList/>
		</>
	);
};

export default CategoryGoodsList;