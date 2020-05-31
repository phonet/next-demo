import React from 'react';
import GoodsItem from '../GoodsItem';
import styles from './index.less';

/**
 * 猜你喜欢
 * 2020/5/19 2:25 上午 BY TF
 * @returns {*}
 * @constructor
 */
const AreaDLike = () => {

	const test = new Array(15).fill(10);

	return (
		<div className={`fcb mb40`}>
			<h1 className={styles.title}>猜你喜欢</h1>
			<ul className={`fcb`}>
				{
					test.map((o, i) => {
						return (
							<GoodsItem key={i}
									  // myStyle={{marginRight: 10, marginBottom: 10}}
									myClassName={styles.goodsItem}
							/>
						);
					})
				}
			</ul>
		</div>
	);
};

export default AreaDLike;