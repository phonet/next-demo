import React, {useEffect, useState} from 'react';
import styles from './index.less';
import ShoppingCartOutlined from '@ant-design/icons/lib/icons/ShoppingCartOutlined';
import Link from 'next/link';
import {getLoginStorage} from '../../../util/saveLogin';
import {addFollowApi, deleteFollowApi, isFollowApi} from '../../../api/Api';

//获取用户是否关注店铺
const getIsFollow = async (storeId) => {
    try {
        const res = await isFollowApi(storeId);
        return res.code === 20000 ? res.data : {};
    } catch (e) {
        return {};
    }
};

//关注店铺
const addFollow = async (storeId) => {
    try {
        const res = await addFollowApi(storeId);
        return res.code === 20000 ? res.data : {};
    } catch (e) {
        return {};
    }
};

const cancelFollow = async (storeId) => {
    try {
        const res = await deleteFollowApi(storeId);
        return res.code === 20000 ? res.data : {};
    } catch (e) {
        return {};
    }
};

/**
 * 商品详情
 * 2020/5/31 2:41 上午 BY TF
 */
const GoodsDetails = ({
                          goodsDetail = {},
                          storeGoods = []
                      }) => {

    const [isFollow, setIsFollow] = useState(false);
    useEffect(() => {
        const userInfo = getLoginStorage();
        // console.log(userInfo);
        // console.log(goodsDetail);
        if (userInfo.id && goodsDetail.storeId) { //用户已经登录过了,查询是否关注店铺
            const isFollow = getIsFollow(goodsDetail.storeId).then(r => {
                setIsFollow(r);
            });

        }
    }, []);

    const details = goodsDetail.goodsDetails || '';
    const storeInfoDTO = goodsDetail.storeInfoDTO || {};
    return (
        <div className={`${styles.goodsDetailsWrap} contentWidth fcb`}>
            <div className={`${styles.otherRecommond} fl`}>
                <div className={`${styles.otherStore}`}>
                    <a className={styles.header}>{storeInfoDTO.storeName}</a>
                    <div className={styles.otherStoreOption}>
                        <Link href={`/storeDetail?storeId=${goodsDetail.storeId}`}>
                            <a target={'_blank'} className={`${styles.go}`}>进店逛逛</a>
                        </Link>
                        <a className={`${styles.action}`}
                           onClick={() => {
                               if (isFollow) { //如果已经关注了,取消关注
                                   cancelFollow(goodsDetail.storeId).then(r => {
                                       console.log(r);
                                   });
                               } else {
                                   addFollowApi(goodsDetail.storeId).then(r => {
                                       console.log(r);
                                   });
                               }
                               getIsFollow(goodsDetail.storeId).then(r => {
                                   setIsFollow(r);
                               });
                           }}
                        >
                            {isFollow ? '取消关注' : '关注店铺'}
                        </a>
                    </div>
                </div>
                <div className={styles.otherGoods}>
                    <div className={styles.header}>门店其它商品</div>
                    <ul className={styles.otherGoodsList}>
                        {
                            storeGoods.length ?
                                storeGoods.map(o => {
                                    return (
                                        <li key={o.id}>
                                            <a href=""
                                               className={`${styles.goodsItem}`}
                                                //style={tempStyle}
                                            >
                                                <img src="../../../static/images/test/goods.jpg"
                                                     className={styles.goodsImg} alt=""/>
                                                <div className={styles.goodsDesc}>
                                                    <p className={styles.goodsName}>Kiehl's 科颜氏 金盏花植物精华水金盏花植物精华</p>
                                                    <p className={styles.priceWrap}>
                                                        <span className={styles.nowPrice}>¥519</span>
                                                        <span className={styles.marketPrice}>市场价 ¥630</span>
                                                    </p>
                                                </div>
                                            </a>
                                        </li>
                                    );
                                })
                                :
                                <div className={'noData'}>暂无数据</div>
                        }
                    </ul>
                </div>
            </div>
            <div className={`${styles.detailContent}`}>
                <div dangerouslySetInnerHTML={{__html: details}}/>
            </div>
        </div>
    );
};


export default GoodsDetails;
