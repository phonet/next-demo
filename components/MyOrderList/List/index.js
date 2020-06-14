import React, {useEffect, useState} from 'react';
import styles from './index.less';
import {Input, Spin} from 'antd';
import ListItem from '../ListItem';

/**
 * 订单列表
 * 2020/6/1 12:41 上午 BY TF
 */
const List = ({
                  list = [],
                  onSearch,
                  loading,
                  confirmReceiveGoods
              }) => {
    const [keyWord, setKeyWord] = useState('');
    useEffect(() => {
        return () => {
            //console.log('999')
            //setKeyWord('')
        };
    }, [setKeyWord]);

    const testArr = new Array(10).fill(1);
    return (
        <Spin spinning={loading}>
            <Input.Search placeholder={'输入商品名称/订单号进行查询'}
                          className={styles.searchWrap}
                          value={keyWord}
                          onChange={e => {
                              setKeyWord(e.target.value);
                          }}
                          onSearch={(val) => {
                              onSearch && onSearch(val);
                          }}
            />
            <div className={styles.header}>
                <span className={styles.goodsInfo}>商品信息</span>
                <span className={styles.price}>单价(元)</span>
                <span className={styles.num}>数量</span>
                <span className={styles.realPrice}>实付款（元）</span>
                <span className={styles.status}>订单状态</span>
                <span className={styles.action}>操作</span>
            </div>
            {
                list.length ?
                    list.map((o, i) => {
                        return (
                            <ListItem key={o.id}
                                      item={o}
                                      confirmReceiveGoods={confirmReceiveGoods}
                            />
                        );
                    })
                    :
                    <div className={`noData`}>空空如也,请尽快去下单吧~~</div>
            }
        </Spin>
    );
};


export default List;
