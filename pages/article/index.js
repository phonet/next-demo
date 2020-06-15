import React, {useCallback, useEffect, useRef, useState} from 'react';
import HtmlHead from '../../components/HtmlHead';
import SearchArea from '../../components/SearchArea';
import TopNav from '../../components/TopNav';
import styles from './index.less';
import {Button, Input, message, Radio, Spin} from 'antd';
import {ArrowDownOutlined, ArrowUpOutlined, SortAscendingOutlined} from '@ant-design/icons';
import {getAllCategoryApi, getArticleListApi, modifyReadNumApi} from '../../api/Api';
import Link from 'next/link';
import {IMG_BASE_URL} from '../../util/ConstConfig';
import moment from 'moment';
import EyeOutlined from '@ant-design/icons/lib/icons/EyeOutlined';
import {getFormatTime} from '../../util/Utils';

const sendData = {
    page: 0,
    size: 999,
};

const OrderIcon = ({order}) => {
    // console.log(order);
    if (order === 'asc') {
        return <ArrowUpOutlined/>;
    }
    return <ArrowDownOutlined/>;
};

const btns = [
    {value: 'pageview', label: '热文'},
    {value: 'id', label: '最新'},
];

/**
 * 文章列表
 * 2020/6/7 1:02 上午 BY TF
 */
const Article = ({articleList = [], categoryList}) => {

    const [params, setParams] = useState({keyWord: '', sort: 'pageview'});
    const [order, setOrder] = useState({pageview: 'desc', id: 'desc'});
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState(articleList);
    const sendDataRef = useRef(null);

    useEffect(() => {
        sendDataRef.current = {params, order};
    }, [params, order]);

    const onSearchCall = useCallback(() => {
        setTimeout(() => {
            // console.log({...sendDataRef.current});
            const tempSort = sendDataRef.current.params['sort'];
            const tempOrder = sendDataRef.current.order;
            const send = {
                ...sendDataRef.current.params,
                ...sendData,
                sort: `${tempSort},${tempOrder[tempSort]}`
            };
            setLoading(true);
            getList(send).then(r => {
                setList(r);
            }).finally(r => {
                setLoading(false);
            });
        }, 0);
        // console.log(order);
    }, [params, order]);
    //console.log(list);
    return (
        <Spin spinning={loading}>
            <HtmlHead title={'文章列表'}/>
            <SearchArea/>
            <TopNav hoverShow={true}
                    current={'article'}
                    categoryList={categoryList}
            />
            <div className={`${styles.filterWrap} contentWidth fcb`}>
                <div className={`fl fcb`}>
                    <Radio.Group className={`${styles.btnGroup} fl`}
                                 value={params['sort']}
                    >
                        {
                            btns.map(o => {
                                return (
                                    <Radio.Button key={o.value}
                                                  value={o.value}
                                                  onClick={() => {
                                                      const val = o.value;
                                                      setParams({
                                                          ...params,
                                                          sort: val
                                                      });
                                                      const tempO = order[val] === 'desc' ? 'asc' : 'desc';
                                                      const tempObj = {...order, [val]: tempO};
                                                      //console.log(tempO);
                                                      setOrder(tempObj);
                                                      onSearchCall();
                                                  }}
                                    >
                                        {o.label}
                                        <OrderIcon order={order[o.value]}/>
                                    </Radio.Button>
                                );
                            })
                        }
                    </Radio.Group>
                </div>
                <div className={`fr`}>
                    <Input.Search className={`${styles.searchWrap}`}
                                  placeholder="请输入文章搜索"
                                  value={params.keyWord}
                                  onChange={e => {
                                      setParams({...params, keyWord: e.target.value});
                                  }}
                                  onSearch={value => {
                                      onSearchCall();
                                  }}
                    />
                </div>
            </div>
            <ul className={`contentWidth`}>
                {
                    list.length ?
                        list.map(o => {
                            return (
                                <li className={`${styles.articleItem} bw`} key={o.id}>
                                    <Link href={`/article/articleDetail?id=${o.id}`}>
                                        <a target={'_blank'} className={`${styles.itemLink} fcb`}
                                           onClick={() => {
                                               modifyReadNumApi(o.id);

                                           }}
                                        >
                                            <img className={`${styles.img} fl`} src={`${IMG_BASE_URL}${o.cover}`}
                                                 alt=""/>
                                            <div className={`${styles.contentWrap} fl`}>
                                                <h2 className={styles.title}>{o.title}</h2>
                                                <div className={styles.content}
                                                     dangerouslySetInnerHTML={{__html: o.content}}/>
                                                <div className={`${styles.bottom} fcb`}>
                                                <span
                                                    className={`fl gary f16`}>{getFormatTime(o.updateTime)}</span>
                                                    <div className={`fr`}>
                                                        <EyeOutlined
                                                            style={{color: '#999', fontSize: 20, marginRight: 8}}/>
                                                        <span className={`gary f16`}>{o.pageview || 0}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </li>
                            );
                        })
                        : <div className={`noData`}>暂无数据</div>
                }
            </ul>

        </Spin>
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
    const res1 = await getAllCategoryApi().catch(e => ({})); //所有分类
    return {
        articleList: res,
        categoryList: res1.code === 20000 ? res1.data : [],
    };
};


export default Article;
