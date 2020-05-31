import styles from './index.less';
import React from 'react';
import {Dropdown, Menu} from "antd";
import DownOutlined from "@ant-design/icons/lib/icons/DownOutlined";
import CollectionGoods from "../../pages/collectionGoods";

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/myOrder">
                我的订单
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/authentication">
                实名认证
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/addressList">
                收货地址
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/collectionGoods">
                收藏商品
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/followStore">
                关注店铺
            </a>
        </Menu.Item>
    </Menu>
);

const Header = () => {
    return (
        <div className={`${styles.header} headerHeight`}>
            <ul className={`${styles.headerInner} contentWidth`}>
                <li>
                    <span className={styles.welcomeMsg}>跨境电商欢迎你</span>
                    <a href={''}>登陆</a>
                    <span className={styles.line}>|</span>
                    <a href={''}>注册</a>
                </li>
                <li>
                    <a href="/myOrder" target={'_blank'} className={styles.buyItem}>我的订单</a>
                    <a href="/car" target={'_blank'} className={styles.buyItem}>购物车</a>
                    <Dropdown overlay={menu}>
                        <a href="" className={`${styles.buyItem}`} onClick={e => e.preventDefault()}>个人中心<DownOutlined/></a>
                    </Dropdown>
                    <a href="" className={styles.buyItem}>商家入驻</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;
