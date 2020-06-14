import React from 'react';
import styles from './index.less';
import {getPicUrl} from '../../../util/Utils';
import Link from 'next/link';

/**
 * B区名店推荐
 * 2020/5/19 12:34 上午 BY TF
 * @returns {*}
 * @constructor
 */
const AreaBShops = ({
                        list,
                        ad = []
                    }) => {
    console.log(ad);
    console.log(list);
    return (
        <ul className={`mb40 fcb`}>
            <li className={styles.item}>
                <Link href={`${ad[0]['linkAddress']}`} prefetch={false}>
                    <a target={'_blank'}>
                        <img src={getPicUrl(ad[0]['pictureUrl'])} alt=""/>
                    </a>
                </Link>
            </li>
            {
                list.map((o, i) => {
                    const storeInfoDTO = o.storeInfoDTO || {};
                    return (
                        <li className={styles.item} key={o.id}>
                            <Link href={`/storeDetail?storeId=${o.storeId}`}>
                                <a target={'_blank'}>
                                    <p className={styles.tag}>品牌官方授权</p>
                                    <img src={getPicUrl(storeInfoDTO.storeLogo)} className={styles.brandLogo} alt=""/>
                                    <p className={styles.brandName}>{storeInfoDTO.storeName}</p>
                                </a>
                            </Link>
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default AreaBShops;
