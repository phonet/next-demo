import React from "react";
import styles from './index.less';

const NavArr = [
    {value: 'myOrder', label: '我的订单'},
    {value: 'authentication', label: '实名认证'},
    {value: 'addressList', label: '收货地址'},
    {value: 'collectionGoods', label: '收藏的商品'},
    {value: 'followStore', label: '关注的店铺'},
];

/**
 * 个人中心左侧导航
 * 2020/6/1 12:15 上午 BY TF
 */
const UserCenterNav = ({
                           router = 'myOrder'
                       }) => {

    return (
        <ul className={styles.navWrap}>
            {
                NavArr.map(o => {
                    return (
                        <li className={`${router === o.value ? styles.active : ''}`} key={o.value}>
                            <a href={`/${o.value}`}>{o.label}</a>
                        </li>
                    )
                })
            }
        </ul>
    )
}


export default UserCenterNav;
