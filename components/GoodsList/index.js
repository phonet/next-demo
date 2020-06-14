import React from 'react';
import styles from './index.less';
import GoodsItem from '../GoodsItem';
import {Spin} from 'antd';

/**
 * 商品列表
 * 2020/5/28 1:51 上午 BY TF
 * @returns {*}
 * @constructor
 */
const GoodsList = ({
                       list = [],
                       loading
                   }) => {
    // console.log(list);
    return (
        <Spin spinning={loading}>
            <div className={`${styles.listWrap} contentWidth fcb`}>
                {
                    list.length ?
                        list.map((o, i) => {
                            return (
                                <GoodsItem key={i}
                                           item={o}
                                />
                            );
                        })
                        :
                        <div className={`noData`}>暂无数据</div>
                }
            </div>
        </Spin>
    );
};

export default GoodsList;
