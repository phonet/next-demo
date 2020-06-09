import React from 'react';
import HtmlHead from '../../components/HtmlHead';
import SearchArea from '../../components/SearchArea';
import TopNav from '../../components/TopNav';
import styles from './index.less';
import {Button, Input, message, Radio} from 'antd';
import {ArrowDownOutlined, ArrowUpOutlined, SortAscendingOutlined} from '@ant-design/icons';
import {getArticleListApi} from '../../api/Api';
import Link from 'next/link';
import {IMG_BASE_URL} from '../../util/ConstConfig';
import moment from 'moment';
import EyeOutlined from '@ant-design/icons/lib/icons/EyeOutlined';

const sendData = {
    page: 0,
    size: 999,
};

/**
 * 文章列表
 * 2020/6/7 1:02 上午 BY TF
 */
const Article = ({list}) => {
    //console.log(list);
    return (
        <>
            <HtmlHead title={'文章列表'}/>
            <SearchArea/>
            <TopNav hoverShow={true}
                    current={'article'}
            />
            <div className={`${styles.filterWrap} contentWidth fcb`}>
                <div className={`fl fcb`}>
                    <Button.Group className={`${styles.btnGroup} fl`}>
                        <Radio.Button value="1">热文<ArrowUpOutlined/></Radio.Button>
                        <Radio.Button value="2">最新<ArrowDownOutlined/></Radio.Button>
                    </Button.Group>
                </div>
                <div className={`fr`}>
                    <Input.Search className={`${styles.searchWrap}`}
                                  placeholder="请输入文章搜索"
                                  onSearch={value => console.log(value)}
                    />
                </div>
            </div>
            <ul className={`contentWidth`}>
                {
                    list.map(o => {
                        return (
                            <li className={`${styles.articleItem} bw`} key={o.id}>
                                <Link href={'/'}>
                                    <a target={'_blank'} className={`${styles.itemLink} fcb`}>
                                        <img className={`${styles.img} fl`} src={`${IMG_BASE_URL}${o.cover}`} alt=""/>
                                        <div className={`${styles.contentWrap} fl`}>
                                            <h2 className={styles.title}>{o.title}</h2>
                                            <div className={styles.content}>{o.content}</div>
                                            <div className={`${styles.bottom} fcb`}>
                                                <span
                                                    className={`fl gary f16`}>{o.updateTime ? moment(o.updateTime).format('YYYY-MM-DD') : '--'}</span>
                                                <div className={`fr`}>
                                                    <EyeOutlined style={{color: '#999', fontSize: 20, marginRight: 8}}/>
                                                    <span className={`gary f16`}>1.5w</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>

        </>
    );
};

const getList = async (sendData) => {
    let resData = [];
    try {
        const res = await getArticleListApi(sendData);
        if (res.code === 20000) {
            resData = res.data;
        } else {
            if (process.browser) {
                message.error(`${res.message || '获取文章失败'}`);
            }
        }
    } catch (e) {
        if (process.browser) {
            message.error('接口异常');
        }
    }
    return resData;
};

Article.getInitialProps = async (props) => {
    const res = await getList(sendData);
    return {
        list: res
    };
};


export default Article;
