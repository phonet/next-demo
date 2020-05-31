import React from 'react';
import GoodsItem from '../GoodsItem';
import styles from './index.less';

/**
 * C区--专区
 * 2020/5/19 1:29 上午 BY TF
 * @returns {*}
 * @constructor
 */
const AreaCSpecial = () => {
    const test = new Array(2).fill(1);
    return (
        <div className={`${styles} mb40`}>
            {
                test.map((o, i) => {
                    return (
                        <div className={styles.specialItem} key={i}>
                            <h1 className={styles.title}>{i === 0 ? '美妆专区' : '母婴专区'}</h1>
                            <ul className={`${styles.specialList} fcb`}>
                                <li className={styles.item}>
                                    <a href="/goodsDetail" target={'_blank'}>
                                        <img src="../../../static/images/test/speical1.png" alt="美妆专区"/>
                                    </a>
                                </li>
                                <li className={styles.item}>
                                    <a  href="/goodsDetail" target={'_blank'} className={styles.topA}>
                                        <img src="../../../static/images/test/speical3.png" alt=""/>
                                    </a>
                                    <div className={`fcb`}>
                                        <GoodsItem/>
                                        <GoodsItem/>
                                    </div>
                                </li>
                                <li className={styles.item}>
                                    <a  href="/goodsDetail" target={'_blank'} className={styles.topA}>
                                        <img src="../../../static/images/test/speical3.png" alt=""/>
                                    </a>
                                    <div className={`fcb`}>
                                        <GoodsItem/>
                                        <GoodsItem/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default AreaCSpecial;
