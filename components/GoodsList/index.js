import React from 'react';
import styles from './index.less'
import GoodsItem from "../GoodsItem";

/**
 * 商品列表
 * 2020/5/28 1:51 上午 BY TF
 * @returns {*}
 * @constructor
 */
const GoodsList = () => {
    const testArr = new Array(40).fill(1);
    return (
        <div className={`${styles.listWrap} contentWidth fcb`}>
            {
                testArr.map((o, i) => {
                    return (
                        <GoodsItem key={i}/>
                    )
                })
            }
        </div>
    );
};

export default GoodsList;
