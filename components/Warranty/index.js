import React from 'react';
import styles from './index.less';

/**
 * 质保展示组件
 * 2020/5/18 1:06 上午 BY TF
 * @returns {*}
 * @constructor
 */
const Warranty = ({
                      width
                  }) => {
    return (
        <div className={`bw`}>
            <ul className={`${styles.warranty} ${width ? width : 'contentWidth'} fcb`}>
                <li className={`${styles.warrItem}`}>
                    <img className={`${styles.wrrIcon}`}
                         src={'../static/images/warr1.png'}
                         alt={'正品保障'}
                    />
                    <a>正品保障</a>
                </li>
                <li className={`${styles.warrItem}`}>
                    <img className={`${styles.wrrIcon}`}
                         src={'../static/images/warr2.png'}
                         alt={'严格监管'}
                    />
                    <a>严格监管</a>
                </li>
                <li className={`${styles.warrItem}`}>
                    <img className={`${styles.wrrIcon}`}
                         src={'../static/images/warr3.png'}
                         alt={'商家认证'}
                    />
                    <a>商家认证</a>
                </li>
                <li className={`${styles.warrItem}`}>
                    <img className={`${styles.wrrIcon}`}
                         src={'../static/images/warr4.png'}
                         alt={'售后无忧'}
                    />
                    <a>售后无忧</a>
                </li>
            </ul>
        </div>
    );
};

export default Warranty;
