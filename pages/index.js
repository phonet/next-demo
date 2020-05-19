import React from 'react';
import HomeCarousel from '../components/HomeCarousel/HomeCarousel.js';
import AreaAGoods from '../components/HomeGoods/AreaAGoods';
import AreaBShops from '../components/HomeGoods/AreaBShops';
import AreaCSpecial from '../components/HomeGoods/AreaCSpecial';
import AreaDLike from '../components/HomeGoods/AreaDLike';
import SuperGoods from '../components/HomeGoods/SuperGoods';
import HtmlHead from '../components/HtmlHead';
import SearchArea from '../components/SearchArea';
import TopNav from '../components/TopNav';
import Warranty from '../components/Warranty';
import styles from '../static/styles/index.less';

export default function Home() {
	return (
		<>
			<HtmlHead title={'世贸云'}/>
			<SearchArea/>
			<TopNav/>
			<HomeCarousel/>
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
