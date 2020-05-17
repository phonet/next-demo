import styles from './index.less';
import React from 'react';

const Header = () => {
	return (
		<div className={`${styles.header} headerHeight`}>
			<ul className={`${styles.headerInner} contentWidth`}>
				<li>
					<span className={styles.welcomeMsg}>跨境电商欢迎你</span>
					<a href={''}>登陆</a>
					<span className={styles.line}>|</span>
					<a href={''}>注册</a>
				</li>
				<li>
					<a href={''} className={styles.buyItem}>我的订单</a>
					<a href="" className={styles.buyItem}>购物车</a>
					<a href="" className={`${styles.buyItem}`}>个人中心</a>
					<a href="" className={styles.buyItem}>商家入驻</a>
				</li>
			</ul>
		</div>
	);
};

export default Header;