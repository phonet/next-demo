import {ArrowDownOutlined, ArrowUpOutlined, SortAscendingOutlined} from '@ant-design/icons';
import {Button, Input, Radio} from 'antd';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import styles from './index.less';

const Search = Input.Search;

const OrderIcon = ({order}) => {
    // console.log(order);
    if (order === 1) {
        return <ArrowUpOutlined/>;
    }
    return <ArrowDownOutlined/>;
};

const btns = [
    {value: 1, label: '综合'},
    {value: 2, label: '销量'},
    {value: 3, label: '新品'},
    {value: 4, label: '价格'},
];

/**
 * 综合排序
 * 2020/5/28 1:04 上午 BY TF
 * @returns {*}
 * @constructor
 */
const FilterBar = ({
                       onSearch
                   }) => {
    const [params, setParams] = useState({
        minPrice: '',
        maxPrice: '',
        //order: 1,//1:正序,2:倒序
        sortType: 1,
        keyWord: ''
    });
    const [order, setOrder] = useState({1: 2, 2: 2, 3: 2, 4: 2});
    const sendDataRef = useRef(null);


    useEffect(() => {
        sendDataRef.current = {params, order};
    }, [params, order]);

    const onSearchCall = () => {
        setTimeout(() => {
            // console.log(sendDataRef.current);
            const tempP = sendDataRef.current.params;
            const tempO = sendDataRef.current.order;
            const sendData = {
                ...tempP,
                order: tempO[tempP['sortType']]
            };
            onSearch && onSearch(sendData);
            // console.log(sendData);
        }, 0);
    };

    return (
        <div className={`${styles.filterWrap} contentWidth fcb`}>
            <div className={`fl fcb`}>
                <Radio.Group className={`${styles.btnGroup} fl`}
                             value={params['sortType']}
                >
                    {
                        btns.map(o => {
                            return (
                                <Radio.Button key={o.value}
                                    //className={`${params.sortType === o.value ? styles.active : ''}`}
                                              value={o.value}
                                              onClick={() => {
                                                  const val = o.value;
                                                  setParams({
                                                      ...params,
                                                      sortType: val
                                                  });
                                                  const tempO = order[val] === 1 ? 2 : 1;
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
                <div className={`fl ${styles.inputW}`}>
                    <Input value={params.minPrice}
                           prefix="￥"
                           onChange={e => {
                               setParams({...params, minPrice: e.target.value});
                           }}
                    />
                    <span className={styles.line}>-</span>
                    <Input prefix="￥"
                           value={params.maxPrice}
                           onChange={e => {
                               setParams({...params, maxPrice: e.target.value});
                           }}
                    />

                </div>
            </div>
            <div className={`fr`}>
                <Search className={`${styles.searchWrap}`}
                        placeholder="在当前条件下搜索"
                    //value={params.keyWord}
                        onChange={e => {
                            // console.log(e.target.value);
                            setParams({...params, keyWord: e.target.value});
                        }}
                        onSearch={value => {
                            //setParams({...params, keyWord: value});
                            onSearchCall();
                        }}
                />
            </div>
        </div>
    );
};

export default FilterBar;
