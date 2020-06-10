import styles from './index.less';
import React, {useEffect, useState} from 'react';
import {Dropdown, Menu} from 'antd';
import DownOutlined from '@ant-design/icons/lib/icons/DownOutlined';
import CollectionGoods from '../../pages/userCenter/collectionGoods';
import Link from 'next/link';
import {clearLoginStorage, getLoginStorage} from '../../util/saveLogin';
import {ConfirmModal} from '../ModalAlert';
import Router from 'next/router';

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/userCenter/myOrder">
                我的订单
            </a>
        </Menu.Item>
        {/*<Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/userCenter/authentication">
                实名认证
            </a>
        </Menu.Item>*/}
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/userCenter/addressList">
                收货地址
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/userCenter/collectionGoods">
                收藏商品
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="/userCenter/followStore">
                关注店铺
            </a>
        </Menu.Item>
    </Menu>
);

const Header = ({
                    //userInfo = {}
                }) => {
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        const tempUser = getLoginStorage();
        setUserInfo(tempUser);
    }, []);

    return (
        <div className={`${styles.header} headerHeight`}>
            <ul className={`${styles.headerInner} contentWidth`}>
                <li>
                    <span className={styles.welcomeMsg}>跨境电商欢迎你</span>
                    {
                        userInfo.id ?
                            <>
                                <span>{userInfo.firstName}</span>
                                <a onClick={() => {
                                    ConfirmModal({
                                        constentText: '确定要退出吗?',
                                        onOk: () => {
                                            clearLoginStorage();
                                            return Router.replace('/user/login');
                                        }
                                    });
                                }}>退出</a>
                            </>
                            :
                            <>
                                <Link href={'/user/login'}>
                                    <a>登陆</a>
                                </Link>
                                <span className={styles.line}>|</span>
                                <Link href={'/user/register'}>
                                    <a>注册</a>
                                </Link>
                            </>
                    }
                </li>
                <li>
                    <a href="/userCenter/myOrder" target={'_blank'} className={styles.buyItem}>我的订单</a>
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
