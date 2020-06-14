import {Breadcrumb, Menu, Select} from 'antd';
import React from 'react';
import styles from './index.less';
import Link from 'next/link';

/**
 * 带导航的面包屑
 * 2020/5/20 1:37 上午 BY TF
 * @returns {*}
 * @constructor
 */
const BreadcrumbNav = ({
                           showTotal = true,
                           categoryStr,
                           totalNum
                       }) => {

    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                    General
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                    Layout
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                    Navigation
                </a>
            </Menu.Item>
        </Menu>
    );

    return (
        <div className={`${styles.navCrumbWrap} contentWidth fcb`}>
            <div className={`fl`}>
                <Link href={'/'}>
                    <a target={'_blank'}>首页></a>
                </Link>
                {categoryStr}
            </div>
            {/* <Breadcrumb separator={'>'}
                        className={styles.left}
            >
                <Breadcrumb.Item>
                    <a href="">首页</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Select size={'small'} className={styles.navSelect} value={'lucy'}>
                        <Select.Option value="lucy">水乳1</Select.Option>
                        <Select.Option value="lucy11">水乳2</Select.Option>
                        <Select.Option value="lucy11sd">水乳3</Select.Option>
                    </Select>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Select size={'small'} className={styles.navSelect} value={'lucy'}>
                        <Select.Option value="lucy">水乳1</Select.Option>
                        <Select.Option value="lucy11">水乳2</Select.Option>
                        <Select.Option value="lucy11sd">水乳3</Select.Option>
                    </Select>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Select size={'small'} className={styles.navSelect} value={'lucy'}>
                        <Select.Option value="lucy">面霜1</Select.Option>
                        <Select.Option value="lucy11">面霜2</Select.Option>
                        <Select.Option value="lucy11sd">面霜3</Select.Option>
                    </Select>
                </Breadcrumb.Item>
            </Breadcrumb>*/}
            {
                showTotal &&
                <div className={styles.right}>
                    共<span className={styles.totalGoods}>{totalNum || 0}</span>个商品
                </div>
            }
        </div>
    );

    /*return (
        <div className={`${styles.navCrumbWrap} contentWidth fcb`}>
            <a className={styles.item} href="">首页</a>
            <span className={styles.arrow}>></span>

        </div>
    );*/
};

export default BreadcrumbNav;
