import React from 'react';
import styles from './SubCategory.less';
import Link from 'next/link';
import {sliceArrByNum} from '../../util/Utils';

/**
 * 子分类列表
 * 2020/5/18 12:05 上午 BY TF
 * @returns {*}
 * @constructor
 */
const SubCategory = ({
                         subCategory = []
                     }) => {
    const groupArr = sliceArrByNum(subCategory, 2);
    return (
        <div className={`${styles.subCateInner}`}>
            <ul className={`${styles.subCateList}`}>
                {
                    groupArr.map((o, i) => {
                        return (
                            <li className={`fcb`} key={i}>
                                {
                                    o.length > 0 &&
                                    o.map((a, j) => {
                                        return (
                                            <div className={`${styles.litd}`} key={a.id}>
                                                <div className={styles.underTitleMiddleLine}/>
                                                <div className={`${styles.itemList}`}>
                                                    <p className={styles.title}>
                                                        <Link href={`/categoryGoodsList?categoryId=${a.id}`}>
                                                            <a target="_blank" className={`${styles.cate2}`}>
                                                                {a.name}
                                                            </a>
                                                        </Link>
                                                    </p>
                                                    <div className={`${styles.ctgnamebox}`}>
                                                        {
                                                            a.childNode && a.childNode.length > 0 &&
                                                            a.childNode.map(c => {
                                                                return (
                                                                    <Link href={`/categoryGoodsList?categoryId=${c.id}`}
                                                                          key={c.id}>
                                                                        <a target="_blank"
                                                                           className="f-fcred">
                                                                            {c.name}
                                                                        </a>
                                                                    </Link>
                                                                );
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default SubCategory;
