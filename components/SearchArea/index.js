import React from 'react';
import SearchBar from '../SearchBar';
import styles from './index.less';

/**
 * 搜索区域(包含搜索框和logo)
 * 2020/5/20 1:00 上午 BY TF
 * @returns {*}
 * @constructor
 */
const SearchArea = ({
                        noSearch = false
                    }) => {
    return (
        <div className={`bw`}>
            <div className={`${styles.searchWrap} contentWidth`}>
                <a className={styles.logoWrap}>
                    <img src="../../static/images/logo.png" alt="跨境电商"/>
                </a>
                {
                    !noSearch &&
                    <div className={styles.searchArea}>
                        <SearchBar/>
                    </div>
                }
            </div>
        </div>
    );
};

export default SearchArea;
