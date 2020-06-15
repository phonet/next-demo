import React from 'react';
import styles from './index.less';
import HtmlHead from '../../components/HtmlHead';
import SearchArea from '../../components/SearchArea';
import TopNav from '../../components/TopNav';
import {getAllCategoryApi, getArticleDetailApi} from '../../api/Api';
import Article from './index';
import moment from 'moment';
import EyeOutlined from '@ant-design/icons/lib/icons/EyeOutlined';
import {getFormatTime} from '../../util/Utils';

/**
 * 文章详情
 * 2020/6/15 1:59 上午 BY TF
 */
const ArticleDetail = ({
                           categoryList,
                           detail = {}
                       }) => {
    // console.log(detail);
    return (
        <>
            <HtmlHead title={'文章列表'}/>
            <TopNav hoverShow={true}
                    current={'article'}
                    categoryList={categoryList}
            />
            <div className={`contentWidth`}>
                <div className={styles.detailNav}>
                    快报列表 > {detail.title}
                </div>
                <div className={styles.detailContent}>
                    <h1 className={styles.detailTitle}>真人试穿 | {detail.title}</h1>
                    <div className={`${styles.bottom} fcb`}>
                                                <span
                                                    className={`fl gary f16`}>{detail.updateTime ? getFormatTime(detail.updateTime) : '--'}</span>
                        <div className={`fr`}>
                            <EyeOutlined style={{color: '#999', fontSize: 20, marginRight: 8}}/>
                            <span className={`gary f16`}>{detail.pageview || 0}</span>
                        </div>
                    </div>
                    <div className={styles.body}
                         dangerouslySetInnerHTML={{__html: detail.content}}
                    />
                </div>
            </div>
        </>
    );
};

ArticleDetail.getInitialProps = async (props) => {
    const {id} = props.query;
    const res = await getArticleDetailApi(id).catch(e => ({}));
    const res1 = await getAllCategoryApi().catch(e => ({})); //所有分类
    return {
        detail: res.code === 20000 ? res.data : {},
        categoryList: res1.code === 20000 ? res1.data : [],
    };
};

export default ArticleDetail;
