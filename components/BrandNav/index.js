import React, {useState} from 'react';
import styles from './index.less';

/**
 * 商品列表中所有品牌列表
 * 2020/5/28 12:25 上午 BY TF
 * @returns {*}
 * @constructor
 */
const BrandNav = ({
                      list = [],
                      onSearch
                  }) => {
    const [brandId, setBrandId] = useState('');
    return (
        <div className={`${styles.opertaion} contentWidth`}>
            <div className={`${styles.brandBox} fcb`}>
                <div className={styles.name}>品牌</div>
                <div className={styles.rightList}>
                    {
                        list.length ?
                            list.map((o, i) => {
                                return (
                                    <a title={o.brandName}
                                       key={o.id}
                                       className={`${styles.item} ${brandId === o.id ? styles.active : ''}`}
                                       onClick={() => {
                                           setBrandId(o.id);
                                           onSearch && onSearch(o.id);
                                       }}
                                    >
                                        {o.brandName}
                                    </a>
                                );
                            })
                            :
                            <div className={`noData`}>暂无数据</div>
                    }
                </div>
            </div>
        </div>
    );
};

export default BrandNav;
