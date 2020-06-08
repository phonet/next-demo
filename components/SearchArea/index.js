import React from 'react';
import SearchBar from '../SearchBar';
import styles from './index.less';
import Link from "next/link";

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
                <Link href={'/'}>
                    <a className={styles.logoWrap} target={'_blank'}>
                        <img src="../../static/images/logo.png" alt="跨境电商"/>
                    </a>
                </Link>
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
