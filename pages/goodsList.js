import React from 'react';
import BreadcrumbNav from '../components/BreadcrumbNav';
import HtmlHead from '../components/HtmlHead';
import SearchArea from '../components/SearchArea';
import TopNav from '../components/TopNav';

/**
 * 商品列表
 * 2020/5/20 1:06 上午 BY TF
 * @returns {*}
 * @constructor
 */
const GoodsList = () => {
	return (
		<>
			<HtmlHead title={'商品列表'}/>
			<SearchArea/>
			<TopNav hoverShow={true}/>
			<BreadcrumbNav/>
		</>
	);
};

export default GoodsList;