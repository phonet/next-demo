import Head from 'next/head';
import Category from '../components/Category';
import HomeCarousel from '../components/HomeCarousel/HomeCarousel.js';
import HotGoods from '../components/HomeGoods/HotGoods';
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
			<div className={`${styles.searchWrap} contentWidth`}>
				<div>logo</div>
				<div className={styles.searchArea}>
					<SearchBar/>
				</div>
			</div>
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
			<HomeCarousel/>
			<Warranty/>
			<div className={`${styles.homeContent}`}>
				<div className={`contentWidth`}>
					<HotGoods/>
					<SuperGoods/>
				</div>
			</div>
		</>
	);
}
