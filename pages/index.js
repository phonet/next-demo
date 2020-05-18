import Head from 'next/head';
import Category from '../components/Category';
import HomeCarousel from '../components/HomeCarousel/HomeCarousel.js';
import AreaAGoods from '../components/HomeGoods/AreaAGoods';
import AreaBShops from '../components/HomeGoods/AreaBShops';
import AreaCSpecial from '../components/HomeGoods/AreaCSpecial';
import AreaDLike from '../components/HomeGoods/AreaDLike';
import SuperGoods from '../components/HomeGoods/SuperGoods';
import SearchBar from '../components/SearchBar';
import Warranty from '../components/Warranty';
import styles from '../static/styles/index.less';

export default function Home() {
	return (
		<>
			<Head>
				<title>跨境电商</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<div className={`bw`}>
				<div className={`${styles.searchWrap} contentWidth`}>
					<a className={styles.logoWrap}>
						<img src="../static/images/logo.png" alt="跨境电商"/>
					</a>
					<div className={styles.searchArea}>
						<SearchBar/>
					</div>
				</div>
			</div>
			<div className={`bw`}>
				<div className={`${styles.topTab} bw contentWidth fcb`}>
					<Category/>
					<ul className={`${styles.funcTab} fcb`}>
						<li>
							<a href="#">首页</a>
						</li>
						<li>
							<a href="#">快报</a>
						</li>
					</ul>
				</div>
			</div>
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
