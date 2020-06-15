import React from 'react';
import GoodsItem from '../GoodsItem';
import styles from './index.less';

/**
 * 猜你喜欢
 * 2020/5/19 2:25 上午 BY TF
 * @returns {*}
 * @constructor
 */
const AreaDLike = ({
                       list = []
                   }) => {

    return (
        <div className={`fcb mb40`}>
            <h1 className={styles.title}>猜你喜欢</h1>
            <ul className={`fcb`}>
                {
                    list.length ?
                        list.map((o, i) => {
                            return (
                                <GoodsItem key={i}
                                           myClassName={styles.goodsItem}
                                           data={{...o, goodsDTO: o}}
                                />
                            );
                        })
                        :
                        <div className={'noData'}>暂无数据</div>
                }
            </ul>
        </div>
    );
};

export default AreaDLike;
