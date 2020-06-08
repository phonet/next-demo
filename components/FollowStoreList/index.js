import React, {useEffect, useState} from 'react';
import styles from './index.less';
import {deleteFollowApi, getCollectApi, getFollowApi} from '../../api/Api';
import {Button, message} from 'antd';
import Link from 'next/link';
import {ConfirmModal} from '../ModalAlert';

/**
 * 关注的店铺列表
 * 2020/6/6 11:48 下午 BY TF
 */
const FollowStoreList = () => {

    const [loading, setLoading] = useState(false);
    const [params, setParams] = useState({page: 0, size: 999});
    const [dataSource, setDataSource] = useState([]);

    const getList = async () => {
        setLoading(true);
        try {
            const res = await getFollowApi(params);
            setLoading(false);
            if (res.code === 20000) {
                setDataSource(res.data || []);
            } else {
                message.info(`${res.message || '关注店铺获取失败'}`);
            }
        } catch (e) {
            setLoading(false);
            message.error('接口异常');
        }
    };
    useEffect(() => {
        getList();
    }, [params]);

    const testArr = new Array(4).fill(1);
    const testGoods = new Array(4).fill(1);

    return (
        <>
            <div className={styles.title}>我关注的店铺 (共 {dataSource.length} 个)</div>
            <div className={styles.followList}>
                {
                    testArr.map((o, i) => {
                        return (
                            <div key={i} className={styles.followItem}>
                                <div className={`${styles.storeNameWrap} fcb`}>
                                    <span className={`${styles.storeName} fwb fl`}>FILA 斐乐旗舰店</span>
                                    <a className={`${styles.storeName} fr`}>查看全部></a>
                                </div>
                                <div className={`fcb`}>
                                    <div className={`${styles.store} fl`}>
                                        <img className={styles.logo} src="/static/images/test/logo.jpg" alt=""/><br/>
                                        <Button size={'small'}
                                                onClick={() => {
                                                    ConfirmModal({
                                                        title: '提示',
                                                        constentText: '确定取消关注此店铺吗?',
                                                        onOk: async () => {
                                                            let resModal = Promise.reject();
                                                            try {
                                                                const res = await deleteFollowApi('');
                                                                if (res.code === 20000) {
                                                                    message.success('取消成功');
                                                                    getList();
                                                                    resModal = Promise.resolve();
                                                                } else {
                                                                    message.error(`${res.message || '取消失败'}`);
                                                                }
                                                            } catch (e) {
                                                                message.error('接口异常');
                                                            }
                                                            return resModal;
                                                        }
                                                    });
                                                }}>
                                            取消关注
                                        </Button>
                                    </div>
                                    <ul className={`${styles.storeGoodsList} fl fcb`}>
                                        {
                                            testGoods.map((a, j) => {
                                                return (
                                                    <li key={j} className={`${styles.goodsItem} fl`}>
                                                        <Link href={'/'}>
                                                            <a target={'_blank'}>
                                                                <img src="/static/images/test/goods.jpg"
                                                                     className={styles.goodsImg}
                                                                     alt=""/>
                                                                <div className={styles.goodsDesc}>
                                                                    <p className={styles.goodsName}>Kiehl's 科颜氏
                                                                        金盏花植物精华水金盏花植物精华</p>
                                                                    <p className={styles.priceWrap}>
                                                                        <span className={styles.nowPrice}>¥519</span>
                                                                        <span
                                                                            className={styles.marketPrice}>市场价 ¥630</span>
                                                                    </p>
                                                                </div>
                                                            </a>
                                                        </Link>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
};


export default FollowStoreList;
