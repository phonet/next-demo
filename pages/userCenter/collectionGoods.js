import React from 'react';
import HtmlHead from '../../components/HtmlHead';
import SearchArea from '../../components/SearchArea';
import UserCenterNav from '../../components/UserCenterNav';
import CollectList from '../../components/CollectList';

/**
 * 收藏的商品
 * 2020/6/1 12:07 上午 BY TF
 */
const CollectionGoods = () => {
    return (
        <>
            <HtmlHead title={'收藏的商品'}/>
            <SearchArea/>
            <div className={`bw`}>
                <div className={`contentWidth fcb`}>
                    <UserCenterNav router={'collectionGoods'}/>
                    <div className={`userCenter fl`}>
                        <CollectList/>
                    </div>
                </div>
            </div>
        </>
    );
};


export default CollectionGoods;
