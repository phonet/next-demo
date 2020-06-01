import React from "react";
import styles from './UserLayout.less';
import Warranty from "../Warranty";

/**
 * 用户登录模块的布局
 * 2020/6/2 1:30 上午 BY TF
 */
const UserLayout = ({children}) => {
    return (
        <div className={`bw`}>
            <div className={`${styles.userHeader} contentWidth fcb`}>
                <a className={`${styles.logoLink} fl`}>
                    <img src="/static/images/logo.png" alt=""/>
                </a>
                <div className={`${styles.warrantWrap} fl`}>
                    <Warranty width={'auto'}/>
                </div>
            </div>
            <div className={styles.userContent}>
                <div className={`contentWidth fcb`}>
                    <div className={`fr`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default UserLayout;
