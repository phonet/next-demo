import React from 'react';
import styles from './index.less';
import Link from 'next/link';
import {IMG_BASE_URL} from '../../../util/ConstConfig';

/**
 * 热卖品牌(A区广告)
 * 2020/5/18 1:15 上午 BY TF
 * @returns {*}
 * @constructor
 */
const AreaAGoods = ({
                        list = []
                    }) => {
    //第一张图
    const A1 = list.find(o => o.positionCode === 3) || {};
    const otherA1 = list.filter(o => o.positionCode !== 3);
    return (
        <ul className={'mb40 fcb'}>
            {
                A1.id &&
                <li className={`${styles.hotItem}`} key={A1.id}>
                    <a href={A1['linkAddress']} target={'_blank'}>
                        <p className={styles.titleWrap}>
                            <span className={styles.title}>{A1.pictureName}</span>
                            <span className={styles.subTitle}>{A1.subPictureName}</span>
                        </p>
                        <img src={`${IMG_BASE_URL}${A1.pictureUrl}`} width={250} height={320} alt=""/>
                    </a>
                </li>
            }
            {
                otherA1.map(o => {
                    return (
                        <li className={`${styles.hotItem}`} key={o.id}>
                            <a href={o['linkAddress']} target={'_blank'}>
                                <p className={styles.titleWrap}>
                                    <span className={styles.title}>{o.pictureName}</span>
                                    <span className={styles.subTitle}>{o.subPictureName}</span>
                                </p>
                                <img src={`${IMG_BASE_URL}${o.pictureUrl}`} width={500} height={320} alt=""/>
                            </a>
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default AreaAGoods;
