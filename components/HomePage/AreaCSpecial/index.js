import React from 'react';
import GoodsItem from '../GoodsItem';
import styles from './index.less';
import {getPicUrl} from '../../../util/Utils';

/**
 * C区--专区
 * 2020/5/19 1:29 上午 BY TF
 * @returns {*}
 * @constructor
 */
const AreaCSpecial = ({
                          list = {}
                      }) => {
    const test = new Array(2).fill(1);
    console.log(list);
    const specialList = list.prefectureRecommend || [];
    return (
        <div className={`${styles} mb40`}>
            {
                specialList.map((o, i) => {
                    const goodsRecommendDTOS = o.goodsRecommendDTOS || [];
                    return (
                        <div className={styles.specialItem} key={o.id}>
                            <h1 className={styles.title}>{o.divisionName}</h1>
                            <ul className={`${styles.specialList} fcb`}>
                                <li className={styles.item}>
                                    <a href="/goodsDetail" target={'_blank'}>
                                        <img src={getPicUrl(o.positionOne && o.positionOne.pictureUrl)} alt="美妆专区"/>
                                    </a>
                                </li>
                                <li className={`${styles.item}`}>
                                    <div className={`fcb`}>
                                        <a href="/goodsDetail" target={'_blank'} className={`${styles.topA} fl`}>
                                            <img src={getPicUrl(o.positionOne && o.positionTwo.pictureUrl)} alt=""/>
                                        </a>
                                        <a href="/goodsDetail" target={'_blank'} className={`${styles.topA} fl`}>
                                            <img src={getPicUrl(o.positionOne && o.positionThree.pictureUrl)} alt=""/>
                                        </a>
                                    </div>
                                    <div className={`fcb`}>
                                        {
                                            goodsRecommendDTOS.map(a => {
                                                return (
                                                    <GoodsItem data={a} key={a.id}/>
                                                )
                                            })
                                        }
                                    </div>
                                </li>
                                {/* <li className={styles.item}>
                                    <div className={`fcb`}>
                                        <GoodsItem/>
                                        <GoodsItem/>
                                    </div>
                                </li>*/}
                            </ul>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default AreaCSpecial;
