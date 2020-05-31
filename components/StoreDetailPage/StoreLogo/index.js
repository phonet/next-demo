import React from "react";
import styles from './index.less';

/**
 * 店铺logon取区域
 * 2020/5/31 4:08 下午 BY TF
 */
const StoreLogo = () => {
    return (
        <div className={`${styles.storeLogo} contentWidth fcb`}>
            <div className={`${styles.logoWrap} fl`}>
                <img src="../../../static/images/test/logo.jpg" alt=""/>
            </div>
            <div className={`fl`}>
                <h1 className={styles.storeName}>NewBalance官方旗舰店</h1>
                <div>
                    <a href="" className={styles.actionBtn}>关注店铺</a>
                </div>
            </div>
        </div>
    )
}


export default StoreLogo;
