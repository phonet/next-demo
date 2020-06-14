import React, {useEffect, useState} from 'react';
import styles from './index.less';
import {deleteCollectApi, getAddressListApi, getCollectApi} from '../../api/Api';
import {message, Spin} from 'antd';
import GoodsItem from '../GoodsItem';
import CollectItem from './CollectItem';

/**
 * 收藏的商品列表
 * 2020/6/6 8:02 下午 BY TF
 */
const CollectList = () => {
    const [loading, setLoading] = useState(false);
    const [params, setParams] = useState({page: 0, size: 999});
    const [visible, setVisible] = useState(false);
    const [dataSource, setDataSource] = useState([]);

    const getList = async () => {
        setLoading(true);
        try {
            const res = await getCollectApi(params);
            setLoading(false);
            if (res.code === 20000) {
                setDataSource(res.data || []);
            } else {
                message.info(`${res.message || '商品获取失败'}`);
            }
        } catch (e) {
            setLoading(false);
            message.error('接口异常');
        }
    };
    useEffect(() => {
        getList();
    }, [params]);


    const testArr = new Array(40).fill(1);

    return (
        <Spin spinning={loading}>
            <div className={styles.title}>我收藏的商品 (共 {dataSource.length} 个)</div>
            <div className={`${styles.collectWrap} fcb`}>
                {
                    dataSource.length ?
                        dataSource.map((o, i) => {
                            return (
                                <CollectItem key={i}
                                             item={o}
                                             onDelete={async (id) => {
                                                 let resModal = Promise.reject();
                                                 try {
                                                     const res = await deleteCollectApi(id);
                                                     if (res.code === 20000) {
                                                         message.success('删除成功');
                                                         getList();
                                                         resModal = Promise.resolve();
                                                     } else {
                                                         message.error(`${res.message || '删除失败'}`);
                                                     }
                                                 } catch (e) {
                                                     message.error(`接口异常`);
                                                 }
                                                 return resModal;
                                             }}
                                />
                            );
                        })
                        :
                        !loading && <div className={`noData`}>暂无数据</div>
                }
            </div>
        </Spin>
    );
};


export default CollectList;
