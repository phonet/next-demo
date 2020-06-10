import React from 'react';
import styles from './index.less';
import {getPicUrl} from '../../../util/Utils';

/**
 * B区名店推荐
 * 2020/5/19 12:34 上午 BY TF
 * @returns {*}
 * @constructor
 */
const AreaBShops = ({
                        list,
                        ad=[]
                    }) => {
    const test = new Array(4).fill(1);
    return (
        <ul className={`mb40 fcb`}>
            <li className={styles.item}>
                <a href="">
                    <img src={getPicUrl(ad[0]['pictureUrl'])} alt=""/>
                </a>
            </li>
            {
                list.map((o, i) => {
                    const storeInfoDTO = o.storeInfoDTO || {};
                    return (
                        <li className={styles.item} key={o.id}>
                            <a href="/storeDetail" target={'_blank'}>
                                <p className={styles.tag}>品牌官方授权</p>
                                <img src={getPicUrl(storeInfoDTO.storeLogo)} className={styles.brandLogo} alt=""/>
                                <p className={styles.brandName}>{storeInfoDTO.storeName}</p>
                            </a>
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default AreaBShops;
