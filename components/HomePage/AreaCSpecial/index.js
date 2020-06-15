import React from 'react';
import GoodsItem from '../GoodsItem';
import styles from './index.less';
import {getPicUrl} from '../../../util/Utils';
import Link from 'next/link';

/**
 * C区--专区
 * 2020/5/19 1:29 上午 BY TF
 * @returns {*}
 * @constructor
 */
const AreaCSpecial = ({
                          list = {}
                      }) => {
    const specialList = list.prefectureRecommend || [];
    // console.log(specialList);
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
                                    <Link href={o.positionOne && o.positionOne['linkAddress']} prefetch={false}>
                                        <a target={'_blank'}>
                                            <img src={getPicUrl(o.positionOne && o.positionOne.pictureUrl)} alt="美妆专区"/>
                                        </a>
                                    </Link>
                                </li>
                                <li className={`${styles.item}`}>
                                    <div className={`fcb`}>
                                        <Link href={o.positionTwo && o.positionTwo['linkAddress']} prefetch={false}>
                                            <a target={'_blank'} className={`${styles.topA} fl`}>
                                                <img src={getPicUrl(o.positionTwo && o.positionTwo.pictureUrl)} alt=""/>
                                            </a>
                                        </Link>
                                        <Link href={o.positionThree && o.positionThree['linkAddress']} prefetch={false}>
                                            <a target={'_blank'} className={`${styles.topA} fl`}>
                                                <img src={getPicUrl(o.positionThree && o.positionThree.pictureUrl)}
                                                     alt=""/>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className={`fcb`}>
                                        {
                                            goodsRecommendDTOS.map(a => {
                                                return (
                                                    <GoodsItem data={a} key={a.id}/>
                                                );
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
