import React from 'react';
import Category from '../Category';
import styles from './index.less';

/**
 * banner顶上的导航
 * 2020/5/20 12:56 上午 BY TF
 * @returns {*}
 * @constructor
 */
const TopNav = ({
                    hoverShow = false,
                    categoryList
                }) => {
    return (
        <div className={`bw`}>
            <div className={`${styles.topTab} bw contentWidth fcb`}>
                <Category hoverShow={hoverShow}
                          categoryList={categoryList}
                />
                <ul className={`${styles.funcTab} fcb`}>
                    <li>
                        <a href="#">首页</a>
                    </li>
                    <li>
                        <a href="#">快报</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default TopNav;
