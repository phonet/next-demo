import React, {useEffect, useState} from 'react';
import styles from './index.less';
import {getPicUrl} from '../../../util/Utils';
import {Button} from 'antd';
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
 * 店铺logon取区域
 * 2020/5/31 4:08 下午 BY TF
 */
const StoreLogo = ({
                       data = {}
                   }) => {
    const [isFollow, setIsFollow] = useState(false);
    useEffect(() => {
        const userInfo = getLoginStorage();
        console.log(userInfo);
        if (userInfo.id && data.id) { //用户已经登录过了,查询是否关注店铺
            getIsFollow(data.id).then(r => {
                console.log(r);
                setIsFollow(r);
            });

        }
    }, []);

    return (
        <div className={`${styles.storeLogo} contentWidth fcb`}>
            <div className={`${styles.logoWrap} fl`}>
                <img src={getPicUrl(data.storeLogo)} alt={data.storeName}/>
            </div>
            <div className={`fl`}>
                <h1 className={styles.storeName}>{data.storeName}</h1>
                <div>
                    <Button size={'small'}
                            className={styles.actionBtn}
                            onClick={() => {
                                if (isFollow) { //如果已经关注了,取消关注
                                    cancelFollow(data.id).then(r => {
                                        console.log(r);
                                    });
                                } else {
                                    addFollowApi(data.id).then(r => {
                                        console.log(r);
                                    });
                                }
                                getIsFollow(data.id).then(r => {
                                    setIsFollow(r);
                                });
                            }}

                    >
                        {isFollow ? '取消关注' : '关注店铺'}
                    </Button>
                </div>
            </div>
        </div>
    );
};


export default StoreLogo;
