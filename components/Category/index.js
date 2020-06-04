import React from 'react';
import styles from './index.less';
import SubCategory from './SubCategory.js';
import {IMG_BASE_URL} from "../../util/ConstConfig";

/**
 * 分类列表
 * @returns {*}
 * @constructor
 */
const Category = ({
                      hoverShow = false,
                      categoryList = []
                  }) => {
    return (
        <div className={`${styles.category} ${hoverShow ? styles.hoverCategory : ''}`}>
            <div className={`${styles.topLevel}`}>
                <div className={styles.lineicon}>
                    <i/>
                    <i/>
                    <i/>
                </div>
                <span>所有分类</span>
            </div>
            <ul className={`${styles.categoryList} ${hoverShow ? styles.hideCategory : ''}`}>
                {
                    categoryList.map(o => {
                        return (
                            <li className={styles.categoryItem} key={o.id}>
                                {/*<i className={`${styles.categoryIcon} ${styles.categoryCos}`}/>*/}
                                <img src={`${IMG_BASE_URL}${o.pic}`} className={`${styles.categoryIcon}`}/>
                                <span className={styles.categoryName}>{o.name}</span>
                                {
                                    o.childNode && o.childNode.length > 0 &&
                                    <>
                                        <i className={styles.iconArrow}/>
                                        <div className={`${styles.subCategory}`}>
                                            <SubCategory subCategory={o.childNode}/>
                                        </div>
                                    </>
                                }
                            </li>
                        )
                    })
                }
                {/* <li className={styles.categoryItem}>
                    <i className={`${styles.categoryIcon} ${styles.categoryCos}`}/>
                    <span className={styles.categoryName}>美容彩妆</span>
                    <i className={styles.iconArrow}/>
                    <div className={`${styles.subCategory}`}>
                        <SubCategory/>
                    </div>
                </li>
                <li className={styles.categoryItem}>
                    <i className={`${styles.categoryIcon} ${styles.categoryMotherBaby}`}/>
                    <span className={styles.categoryName}>母婴儿童</span>
                    <i className={styles.iconArrow}/>
                    <div className={`${styles.subCategory}`}>
                        <SubCategory/>
                    </div>
                </li>
                <li className={styles.categoryItem}>
                    <i className={`${styles.categoryIcon} ${styles.categoryMotherBaby}`}/>
                    <span className={styles.categoryName}>母婴儿童</span>
                    <i className={styles.iconArrow}/>
                    <div className={`${styles.subCategory}`}>
                        <SubCategory/>
                    </div>
                </li>
                <li className={styles.categoryItem}>
                    <i className={`${styles.categoryIcon} ${styles.categoryMotherBaby}`}/>
                    <span className={styles.categoryName}>母婴儿童</span>
                    <i className={styles.iconArrow}/>
                    <div className={`${styles.subCategory}`}>
                        <SubCategory/>
                    </div>
                </li>
                <li className={styles.categoryItem}>
                    <i className={`${styles.categoryIcon} ${styles.categoryMotherBaby}`}/>
                    <span className={styles.categoryName}>母婴儿童</span>
                    <i className={styles.iconArrow}/>
                    <div className={`${styles.subCategory}`}>
                        <SubCategory/>
                    </div>
                </li>
                <li className={styles.categoryItem}>
                    <i className={`${styles.categoryIcon} ${styles.categoryMotherBaby}`}/>
                    <span className={styles.categoryName}>母婴儿童</span>
                    <i className={styles.iconArrow}/>
                    <div className={`${styles.subCategory}`}>
                        <SubCategory/>
                    </div>
                </li>
                <li className={styles.categoryItem}>
                    <i className={`${styles.categoryIcon} ${styles.categoryMotherBaby}`}/>
                    <span className={styles.categoryName}>母婴儿童</span>
                    <i className={styles.iconArrow}/>
                    <div className={`${styles.subCategory}`}>
                        <SubCategory/>
                    </div>
                </li>
                <li className={styles.categoryItem}>
                    <i className={`${styles.categoryIcon} ${styles.categoryMotherBaby}`}/>
                    <span className={styles.categoryName}>母婴儿童</span>
                    <i className={styles.iconArrow}/>
                    <div className={`${styles.subCategory}`}>
                        <SubCategory/>
                    </div>
                </li>*/}
            </ul>
        </div>
    );
};

export default Category;
