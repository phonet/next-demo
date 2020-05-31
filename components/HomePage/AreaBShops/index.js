import React from 'react';
import styles from './index.less';

/**
 * B区名店推荐
 * 2020/5/19 12:34 上午 BY TF
 * @returns {*}
 * @constructor
 */
const AreaBShops = () => {
	const test = new Array(4).fill(1);
	return (
		<ul className={`mb40 fcb`}>
			<li className={styles.item}>
				<a href="">
					<img src="../../../static/images/global_shop.png" alt=""/>
				</a>
			</li>
			{
				test.map((o, i) => {
					return (
						<li className={styles.item} key={i}>
							<a href="/storeDetail" target={'_blank'}>
								<p className={styles.tag}>品牌官方授权</p>
								<img src="../../../static/images/test/hot1.png" className={styles.brandLogo} alt=""/>
								<p className={styles.brandName}>SWAROVSKI 施华洛世奇 旗舰店</p>
							</a>
						</li>
					);
				})
			}
		</ul>
	);
};

export default AreaBShops;
