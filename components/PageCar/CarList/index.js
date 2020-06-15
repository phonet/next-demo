import React, {Fragment, useEffect, useState} from 'react';
import styles from './index.less';
import {Button, Checkbox, message} from 'antd';
import InputBuyNumber from '../../InputBuyNumber';
import {
    clearCarApi,
    deleteCarApi,
    generateConfirmOrderApi,
    getCarListApi,
    modifyCarQuantityApi
} from '../../../api/Api';
import {getPicUrl} from '../../../util/Utils';
import {ConfirmModal} from '../../ModalAlert';
import Router from 'next/router';


/**
 * 购物车列表
 * 2020/5/31 6:05 下午 BY TF
 */
const CarList = () => {

    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [choseKeys, setChoseKeys] = useState([]);
    useEffect(() => {
        getCarList();
    }, []);

    //获取列表数据
    const getCarList = async () => {
        let resArr = [];
        try {
            const res = await getCarListApi();
            resArr = res.code === 20000 ? res.data : [];
        } catch (e) {
            message.error('接口异常');
        }
        setList(resArr);
    };

    //修改商品数量
    const modifyCarQuantity = async (sendData) => {
        try {
            const res = await modifyCarQuantityApi(sendData);
            if (res.code === 20000) {
                getCarList();
            } else {
                message.error(`${res.message || '不能修改'}`);
            }
        } catch (e) {
            message.error('接口异常');
        }
    };

    let allGoods = [];
    list.map(o => {
        if (o.cartItemDTOS.length > 0) {
            allGoods = [...allGoods, ...o.cartItemDTOS];
        }
    });

    //计算总价格
    const getTotalPrice = () => {
        let totalPrice = 0;
        allGoods.map(a => {
            if (choseKeys.includes(a.id)) {
                totalPrice += a.price * a.quantity;
            }
        });
        return totalPrice.toFixed(2);
    };

    return (
        <div className={`bw`}>
            <div className={`${styles.carListPage} contentWidth`}>
                <div className={`${styles.title} fcb`}>
                    <span className={`fl`}>我的购物车 {list.length}</span>
                    <a className={`fr`}
                       onClick={() => {
                           ConfirmModal({
                               title: '提示',
                               constentText: '确定要清空购物车吗?',
                               onOk: async () => {
                                   let resModal = Promise.reject();
                                   try {
                                       const res = await clearCarApi();
                                       if (res.code === 20000) {
                                           resModal = Promise.resolve();
                                           message.success('清空成功');
                                           getCarList();
                                           setChoseKeys([]);
                                       } else {
                                           message.error(`${res.message || '清空失败'}`);
                                       }
                                   } catch (e) {
                                       message.error('接口异常');
                                   }
                                   return resModal;
                               }
                           });
                       }}>清空购物车</a>
                </div>
                <div className={`${styles.header} fcb`}>
                    <span className={styles.check}>
                        <Checkbox checked={choseKeys.length === allGoods.length}
                                  disabled={!list.length}
                                  onChange={e => {
                                      const checked = e.target.checked;
                                      if (checked) { //全选
                                          const temp = [];
                                          list.map(o => {
                                              const cartItemDTOS = o.cartItemDTOS || [];
                                              cartItemDTOS.map(a => {
                                                  temp.push(a.id);
                                              });
                                          });
                                          setChoseKeys(temp);
                                      } else {
                                          setChoseKeys([]);
                                      }
                                  }}>
                            全选
                        </Checkbox>
                    </span>
                    <span className={styles.goodsInfo}>商品信息</span>
                    <span className={styles.price}>单价(元)</span>
                    <span className={styles.num}>数量</span>
                    <span className={styles.money}>金额(元)</span>
                    <span className={styles.action}>操作</span>
                </div>
                {
                    list.length ?
                        list.map(o => {
                            const storeGoodsList = o.cartItemDTOS || [];
                            let tempArr = [];
                            // let choseStore = true;
                            if (storeGoodsList.length && choseKeys.length) {
                                storeGoodsList.map(t => {
                                    choseKeys.map(v => {
                                        if (v === t.id) {
                                            tempArr = [...tempArr, v];
                                        }
                                    });
                                });
                            }
                            return (
                                <Fragment key={o.id}>
                                    <div className={styles.storeName}>
                                        <Checkbox checked={tempArr.length === o.cartItemDTOS.length}
                                                  disabled={!storeGoodsList.length}
                                                  onChange={e => {
                                                      const checked = e.target.checked;
                                                      let temp = choseKeys;
                                                      if (checked) { //全选
                                                          if (storeGoodsList.length) {
                                                              storeGoodsList.map(v => {
                                                                  if (!temp.includes(v.id)) {
                                                                      temp = [...temp, v.id];
                                                                  }
                                                              });
                                                          }
                                                      } else {
                                                          if (storeGoodsList.length) {
                                                              storeGoodsList.map(v => {
                                                                  temp = temp.filter(c => c !== v.id);
                                                              });
                                                          }
                                                      }
                                                      setChoseKeys([...temp]);
                                                  }}>
                                            店铺：{o.storeName}
                                        </Checkbox>
                                    </div>
                                    <ul className={styles.goodsList}>
                                        {
                                            storeGoodsList.length ?
                                                storeGoodsList.map(a => {
                                                    const tempPic = a.productPic && JSON.parse(a.productPic);
                                                    const productAttr = a.productAttr && JSON.parse(a.productAttr);
                                                    return (
                                                        <li className={`${styles.item} fcb`}
                                                            key={a.id}
                                                        >
                                                            <div className={`fl`}>
                                                                <Checkbox checked={choseKeys.includes(a.id)}
                                                                          onChange={e => {
                                                                              const checked = e.target.checked;
                                                                              let temp = choseKeys;
                                                                              if (checked) { //全选
                                                                                  if (!temp.includes(a.id)) {
                                                                                      temp = [...temp, a.id];
                                                                                  }
                                                                              } else {
                                                                                  temp = temp.filter(c => c !== a.id);
                                                                              }
                                                                              setChoseKeys([...temp]);
                                                                          }}
                                                                />
                                                            </div>
                                                            <div className={`${styles.goodsImg} fl`}>
                                                                <img src={getPicUrl(tempPic[0])}
                                                                     alt={a.productName}/>
                                                            </div>
                                                            <div className={`${styles.goodsDesc} fl`}>
                                                                <p className={`${styles.name}`}>{a.productName}</p>
                                                                {productAttr.map(c => {
                                                                    return (
                                                                        <p className={`${styles.color}`}
                                                                           key={c.key}>{c.key}：{c.value} </p>
                                                                    );
                                                                })}
                                                            </div>
                                                            <div
                                                                className={`${styles.goodsPrice} fl`}>￥{a.price.toFixed(2)}</div>
                                                            <div className={`${styles.goodsNum} fl`}>
                                                                <InputBuyNumber value={a.quantity}
                                                                                onCuteHandle={val => {
                                                                                    const sendData = {
                                                                                        quantity: val,
                                                                                        id: a.id,
                                                                                    };
                                                                                    modifyCarQuantity(sendData);
                                                                                }}
                                                                                onAddHandle={val => {
                                                                                    const sendData = {
                                                                                        quantity: val,
                                                                                        id: a.id,
                                                                                    };
                                                                                    modifyCarQuantity(sendData);
                                                                                }}
                                                                                onChange={val => {
                                                                                    const sendData = {
                                                                                        quantity: val,
                                                                                        id: a.id,
                                                                                    };
                                                                                    modifyCarQuantity(sendData);
                                                                                }}
                                                                />
                                                            </div>
                                                            <div
                                                                className={`${styles.goodsSale} fl`}>￥{(a.price * a.quantity).toFixed(2)}</div>
                                                            <div className={`${styles.goodsAction} fl`}>
                                                                <a onClick={() => {
                                                                    ConfirmModal({
                                                                        title: '提示',
                                                                        constentText: '确定要删除此商品吗?',
                                                                        onOk: async () => {
                                                                            let resModal = Promise.reject();
                                                                            try {
                                                                                const res = await deleteCarApi(`?ids=${a.id}`);
                                                                                if (res.code === 20000) {
                                                                                    resModal = Promise.resolve();
                                                                                    message.success('删除成功');
                                                                                    getCarList();
                                                                                    setChoseKeys(choseKeys.filter(v => v !== a.id));
                                                                                } else {
                                                                                    message.error(`${res.message || '删除失败'}`);
                                                                                }
                                                                            } catch (e) {
                                                                                message.error('接口异常');
                                                                            }
                                                                            return resModal;
                                                                        }
                                                                    });
                                                                }}>删除</a>
                                                            </div>
                                                        </li>
                                                    );
                                                })
                                                :
                                                <div className={'noData'}>暂无数据</div>
                                        }
                                    </ul>
                                </Fragment>
                            );
                        })
                        :
                        <div className={'noData'}>空空如也,去添加商品把~~</div>
                }

                <div className={`${styles.buyBottom} fcb`}>
                    <div className={'fl'}>
                        <Checkbox checked={choseKeys.length === allGoods.length}
                                  disabled={!list.length}
                                  onChange={e => {
                                      const checked = e.target.checked;
                                      if (checked) { //全选
                                          const temp = [];
                                          list.map(o => {
                                              const cartItemDTOS = o.cartItemDTOS || [];
                                              cartItemDTOS.map(a => {
                                                  temp.push(a.id);
                                              });
                                          });
                                          setChoseKeys(temp);
                                      } else {
                                          setChoseKeys([]);
                                      }
                                  }}
                        >
                            全选
                        </Checkbox>
                    </div>
                    <a className={`${styles.delAll} fl`}
                       onClick={() => {
                           if (!choseKeys.length) return message.info('请先选择商品');
                           ConfirmModal({
                               title: '提示',
                               constentText: '确定要删除选中的商品吗?',
                               onOk: async () => {
                                   let resModal = Promise.reject();
                                   try {
                                       const res = await deleteCarApi(`?ids=${choseKeys}`);
                                       if (res.code === 20000) {
                                           resModal = Promise.resolve();
                                           message.success('删除成功');
                                           getCarList();
                                           // a.filter((x)=>b.every((y)=>y!=x.id))
                                           // const temp = choseKeys;
                                           setChoseKeys([]);
                                       } else {
                                           message.error(`${res.message || '删除失败'}`);
                                       }
                                   } catch (e) {
                                       message.error('接口异常');
                                   }
                                   return resModal;
                               }
                           });
                       }}>删除选中商品</a>
                    <div className={`${styles.right} fr fcb`}>
                        <p className={`${styles.choseGoods} fl`}>已选商品 <span
                            className={styles.choseRed}>{choseKeys.length}</span> 件 </p>
                        <div className={`fl`}>
                            <div className={`${styles.choseGoods}`}>合计（不含运费）<span
                                className={`${styles.choseRed}`}>¥{getTotalPrice()}</span></div>
                            <div className={`${styles.rate}`}>商品税费： ¥0</div>
                        </div>
                        <Button className={`${styles.buyBtn} fr`}
                                disabled={loading || !choseKeys.length}
                                loading={loading}
                                onClick={async () => {
                                    Router.push(`/submitOrder?cartIds=${JSON.stringify(choseKeys)}`);
                                    /*try {
                                        setLoading(true);
                                        const res = await generateConfirmOrderApi();
                                        setLoading(false);
                                        if (res.code === 2000) {
                                            message.success('订单生成');
                                        } else {
                                            message.error(`${res.message || '接口异常'}`);
                                        }
                                    } catch (e) {
                                        message.error('接口异常');
                                        setLoading(false);
                                    }*/
                                }}
                            //href={'/submitOrder'}
                        >
                            结算
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default CarList;
