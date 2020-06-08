import React from 'react';
import HtmlHead from '../../components/HtmlHead';
import SearchArea from '../../components/SearchArea';
import UserCenterNav from '../../components/UserCenterNav';
import FollowStoreList from '../../components/FollowStoreList';

/**
 * 关注的店铺
 * 2020/6/1 12:09 上午 BY TF
 */
const FollowStore = () => {
    return (
        <>
            <HtmlHead title={'关注的店铺'}/>
            <SearchArea/>
            <div className={`bw`}>
                <div className={`contentWidth fcb`}>
                    <UserCenterNav router={'followStore'}/>
                    <div className={`userCenter fl`}>
                        <FollowStoreList/>
                    </div>
                </div>
            </div>
        </>
    );
};


export default FollowStore;
