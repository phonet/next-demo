import React from 'react';
import styles from './index.less';

/**
 * 商品列表中所有品牌列表
 * 2020/5/28 12:25 上午 BY TF
 * @returns {*}
 * @constructor
 */
const BrandNav = () => {
	const testArr = new Array(20).fill(1);
	return (
		<div className={`${styles.opertaion} contentWidth`}>
			<div className={`${styles.brandBox} fcb`}>
				<div className={styles.name}>品牌</div>
				<div className={styles.rightList}>
					{
						testArr.map((o, i) => {
							return (
								<a title="美赞臣"
								   className={styles.item}
								   href="#">美赞臣</a>
							);
						})
					}
				</div>
			</div>
		</div>
	);
};

export default BrandNav;