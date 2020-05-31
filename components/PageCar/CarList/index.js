import React from "react";
import styles from './index.less';
import {Checkbox} from "antd";
import InputBuyNumber from "../../InputBuyNumber";

/**
 * 购物车列表
 * 2020/5/31 6:05 下午 BY TF
 */
const CarList = () => {
    return (
        <div className={`bw`}>
            <div className={`${styles.carListPage} contentWidth`}>
                <div className={`${styles.title} fcb`}>
                    <span className={`fl`}>我的购物车 10</span>
                    <a className={`fr`} href="">清空购物车</a>
                </div>
                <div className={`${styles.header} fcb`}>
                    <span className={styles.check}>
                        <Checkbox>全选</Checkbox>
                    </span>
                    <span className={styles.goodsInfo}>商品信息</span>
                    <span className={styles.price}>单价(元)</span>
                    <span className={styles.num}>数量</span>
                    <span className={styles.money}>金额(元)</span>
                    <span className={styles.action}>操作</span>
                </div>
                <div className={styles.storeName}>
                    <Checkbox>店铺：海外专营店</Checkbox>
                </div>
                <ul className={styles.goodsList}>
                    <li className={`${styles.item} fcb`}>
                        <div className={`fl`}>
                            <Checkbox></Checkbox>
                        </div>
                        <div className={`${styles.goodsImg} fl`}>
                            <img src="../../../static/images/test/goods.jpg" alt=""/>
                        </div>
                        <div className={`${styles.goodsDesc} fl`}>
                            <p className={`${styles.name}`}>Freeplus芙丽芳丝保湿面霜40克 保湿补水紧致滋润面 霜日晚霜女男</p>
                            <p className={`${styles.color}`}>颜色：天蓝 </p>
                            <p className={`${styles.color}`}>尺码：S</p>
                        </div>
                        <div className={`${styles.goodsPrice} fl`}>￥120.00</div>
                        <div className={`${styles.goodsNum} fl`}>
                            <InputBuyNumber/>
                        </div>
                        <div className={`${styles.goodsSale} fl`}>￥120.00</div>
                        <div className={`${styles.goodsAction} fl`}>
                            <a>删除</a>
                        </div>
                    </li>
                    <li className={`${styles.item} fcb`}>
                        <div className={`fl`}>
                            <Checkbox></Checkbox>
                        </div>
                        <div className={`${styles.goodsImg} fl`}>
                            <img src="../../../static/images/test/goods.jpg" alt=""/>
                        </div>
                        <div className={`${styles.goodsDesc} fl`}>
                            <p className={`${styles.name}`}>Freeplus芙丽芳丝保湿面霜40克 保湿补水紧致滋润面 霜日晚霜女男</p>
                            <p className={`${styles.color}`}>颜色：天蓝 </p>
                            <p className={`${styles.color}`}>尺码：S</p>
                        </div>
                        <div className={`${styles.goodsPrice} fl`}>￥120.00</div>
                        <div className={`${styles.goodsNum} fl`}>
                            <InputBuyNumber/>
                        </div>
                        <div className={`${styles.goodsSale} fl`}>￥120.00</div>
                        <div className={`${styles.goodsAction} fl`}>
                            <a>删除</a>
                        </div>
                    </li>
                </ul>
                <div className={styles.storeName}>
                    <Checkbox>店铺：海外专营店</Checkbox>
                </div>
                <ul className={styles.goodsList}>
                    <li className={`${styles.item} fcb`}>
                        <div className={`fl`}>
                            <Checkbox></Checkbox>
                        </div>
                        <div className={`${styles.goodsImg} fl`}>
                            <img src="../../../static/images/test/goods.jpg" alt=""/>
                        </div>
                        <div className={`${styles.goodsDesc} fl`}>
                            <p className={`${styles.name}`}>Freeplus芙丽芳丝保湿面霜40克 保湿补水紧致滋润面 霜日晚霜女男</p>
                            <p className={`${styles.color}`}>颜色：天蓝 </p>
                            <p className={`${styles.color}`}>尺码：S</p>
                        </div>
                        <div className={`${styles.goodsPrice} fl`}>￥120.00</div>
                        <div className={`${styles.goodsNum} fl`}>
                            <InputBuyNumber/>
                        </div>
                        <div className={`${styles.goodsSale} fl`}>￥120.00</div>
                        <div className={`${styles.goodsAction} fl`}>
                            <a>删除</a>
                        </div>
                    </li>
                    <li className={`${styles.item} fcb`}>
                        <div className={`fl`}>
                            <Checkbox></Checkbox>
                        </div>
                        <div className={`${styles.goodsImg} fl`}>
                            <img src="../../../static/images/test/goods.jpg" alt=""/>
                        </div>
                        <div className={`${styles.goodsDesc} fl`}>
                            <p className={`${styles.name}`}>Freeplus芙丽芳丝保湿面霜40克 保湿补水紧致滋润面 霜日晚霜女男</p>
                            <p className={`${styles.color}`}>颜色：天蓝 </p>
                            <p className={`${styles.color}`}>尺码：S</p>
                        </div>
                        <div className={`${styles.goodsPrice} fl`}>￥120.00</div>
                        <div className={`${styles.goodsNum} fl`}>
                            <InputBuyNumber/>
                        </div>
                        <div className={`${styles.goodsSale} fl`}>￥120.00</div>
                        <div className={`${styles.goodsAction} fl`}>
                            <a>删除</a>
                        </div>
                    </li>
                </ul>

                <div className={`${styles.buyBottom} fcb`}>
                    <div className={'fl'}>
                        <Checkbox>全选</Checkbox>
                    </div>
                    <a className={`${styles.delAll} fl`} href="">删除选中商品</a>
                    <div className={`${styles.right} fr fcb`}>
                        <p className={`${styles.choseGoods} fl`}>已选商品 <span className={styles.choseRed}>2</span> 件 </p>
                        <div className={`fl`}>
                            <div className={`${styles.choseGoods}`}>合计（不含运费）<span
                                className={`${styles.choseRed}`}>¥424</span></div>
                            <div className={`${styles.rate}`}>商品税费： ¥0</div>
                        </div>
                        <a className={`${styles.buyBtn} fr`} href={'/submitOrder'}>结算</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CarList;
