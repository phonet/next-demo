import React from 'react';
import Category from '../Category';
import styles from './index.less';
import Link from 'next/link';

/**
 * banner顶上的导航
 * 2020/5/20 12:56 上午 BY TF
 * @returns {*}
 * @constructor
 */
const TopNav = ({
                    hoverShow = false,
                    categoryList,
                    current
                }) => {
    // console.log(categoryList);
    return (
        <div className={`bw`}>
            <div className={`${styles.topTab} bw contentWidth fcb`}>
                <Category hoverShow={hoverShow}
                          categoryList={categoryList}
                />
                <ul className={`${styles.funcTab} fcb`}>
                    <li>
                        <Link href="/">
                            <a target={'_blank'}
                               className={`${current === 'index' ? styles.active : ''}`}>
                                首页
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/article">
                            <a target={'_blank'}
                               className={`${current === 'article' ? styles.active : ''}`}
                            >
                                快报
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};


export default TopNav;
