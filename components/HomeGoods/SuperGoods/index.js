import {Progress} from 'antd';
import React from 'react';
import PriceShow from '../../PriceShow';
import styles from './index.less';

/**
 * 超级单品
 * 2020/5/18 1:39 上午 BY TF
 * @returns {*}
 * @constructor
 */
const SuperGoods = () => {
	const test = new Array(9).fill(1);
	return (
		<div className={`${styles.superGoods} contentWidth mb40`}>
			<ul className={`${styles.superGoodsList} fcb`}>
				<li className={`${styles.item}`}>
					<h1>超级单品</h1>
					<h2>限量 品质 超值</h2>
					<i/>
					<h3>全球多款品质好货</h3>
				</li>
				{
					test.map((o, i) => {
						return (
							<li className={`${styles.item}`}
								key={i}
							>
								<a href='#'>
									<img src="../static/images/test/hot1.png" alt=""
										 className={styles.googsImg}
									/>
									<div className={styles.googsDesc}>
										<p className={`${styles.goodsName} break`}
										   title={'Sulwhasoo 雪花秀 滋盈肌本Sulwhasoo 雪花秀 滋盈肌本'}>Sulwhasoo 雪花秀 滋盈肌本Sulwhasoo
											雪花秀 滋盈肌本</p>
										<Progress percent={70} status="exception" showInfo={false}
												  strokeColor={'#F33A3F'}
												  trailColor={'#EAEAEA'}
										/>
										<PriceShow/>
									</div>
								</a>
							</li>
						);
					})
				}
			</ul>
			<div className={`${styles.superGoodsBg}`}/>
		</div>
	);
};

export default SuperGoods;