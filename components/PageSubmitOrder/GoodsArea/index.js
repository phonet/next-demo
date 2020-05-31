import React from "react";
import styles from './index.less';
import {Input} from "antd";

/**
 * 商品列表
 * 2020/5/31 10:00 下午 BY TF
 */
const GoodsArea = () => {
    return (
        <div className={`contentWidth ${styles.goodsAreaPage}`}>
            <div className={`${styles.title}`}>确认订单信息</div>
            <div className={`${styles.header} fcb`}>
                <span className={`${styles.goodsInfo} fl`}>商品信息</span>
                <span className={`${styles.goodsPrice} fl`}>单价(元)</span>
                <span className={`${styles.goodsNum} fl`}>数量</span>
                <span className={`${styles.money} fl`}>金额(元)</span>
            </div>
            <div className={styles.goodsTitle}>店铺：海外专营店</div>
            <div className={styles.goodsBox}>
                <div className={`${styles.item} fcb`}>
                    <img className={`${styles.goodsImg} fl`} src="/static/images/test/goods.jpg" alt=""/>
                    <div className={`${styles.goodsName} fl`}>Freeplus芙丽芳丝保湿面霜40克 保湿补水紧致滋润面 霜日晚霜女男</div>
                    <div className={`${styles.size} fl`}>
                        <span>颜色：天蓝 </span><br/>
                        <span>尺码：S</span>
                    </div>
                    <div className={`${styles.fontBold} ${styles.price} fl`}>￥120.00</div>
                    <div className={`${styles.fontBold}  ${styles.num} fl`}>1</div>
                    <div className={`${styles.fontBold} ${styles.money} fl`}>￥120.00</div>
                </div>
                <div className={`${styles.item} fcb`}>
                    <img className={`${styles.goodsImg} fl`} src="/static/images/test/goods.jpg" alt=""/>
                    <div className={`${styles.goodsName} fl`}>Freeplus芙丽芳丝保湿面霜40克 保湿补水紧致滋润面 霜日晚霜女男</div>
                    <div className={`${styles.size} fl`}>
                        <span>颜色：天蓝 </span><br/>
                        <span>尺码：S</span>
                    </div>
                    <div className={`${styles.fontBold} ${styles.price} fl`}>￥120.00</div>
                    <div className={`${styles.fontBold}  ${styles.num} fl`}>1</div>
                    <div className={`${styles.fontBold} ${styles.money} fl`}>￥120.00</div>
                </div>
                <div className={styles.yunFee}>
                    <span className={`color6 f16`}>运费：</span>
                    <span className={`red f16`}>￥5.00</span>
                </div>
                <div className={`${styles.msgWrap} fcb`}>
                    <div className={`fl fcb`}>
                        <span className={`${styles.msgTitle} fl`}>给商家留言：</span>
                        <div className={`fl ${styles.msgText}`}>
                            <Input.TextArea rows={2} placeholder={'选填，最多200字'}/>
                        </div>
                    </div>
                    <div className={`fr`}>
                        <span>店铺合计(含运费)：</span>
                        <span className={`f20 fwb red`}>￥245.00</span>
                    </div>
                </div>
            </div>
            <div className={styles.goodsTitle}>店铺：海外专营店</div>
            <div className={styles.goodsBox}>
                <div className={`${styles.item} fcb`}>
                    <img className={`${styles.goodsImg} fl`} src="/static/images/test/goods.jpg" alt=""/>
                    <div className={`${styles.goodsName} fl`}>Freeplus芙丽芳丝保湿面霜40克 保湿补水紧致滋润面 霜日晚霜女男</div>
                    <div className={`${styles.size} fl`}>
                        <span>颜色：天蓝 </span><br/>
                        <span>尺码：S</span>
                    </div>
                    <div className={`${styles.fontBold} ${styles.price} fl`}>￥120.00</div>
                    <div className={`${styles.fontBold}  ${styles.num} fl`}>1</div>
                    <div className={`${styles.fontBold} ${styles.money} fl`}>￥120.00</div>
                </div>
                <div className={`${styles.item} fcb`}>
                    <img className={`${styles.goodsImg} fl`} src="/static/images/test/goods.jpg" alt=""/>
                    <div className={`${styles.goodsName} fl`}>Freeplus芙丽芳丝保湿面霜40克 保湿补水紧致滋润面 霜日晚霜女男</div>
                    <div className={`${styles.size} fl`}>
                        <span>颜色：天蓝 </span><br/>
                        <span>尺码：S</span>
                    </div>
                    <div className={`${styles.fontBold} ${styles.price} fl`}>￥120.00</div>
                    <div className={`${styles.fontBold}  ${styles.num} fl`}>1</div>
                    <div className={`${styles.fontBold} ${styles.money} fl`}>￥120.00</div>
                </div>
                <div className={styles.yunFee}>
                    <span className={`color6 f16`}>运费：</span>
                    <span className={`red f16`}>￥5.00</span>
                </div>
                <div className={`${styles.msgWrap} fcb`}>
                    <div className={`fl fcb`}>
                        <span className={`${styles.msgTitle} fl`}>给商家留言：</span>
                        <div className={`fl ${styles.msgText}`}>
                            <Input.TextArea rows={2} placeholder={'选填，最多200字'}/>
                        </div>
                    </div>
                    <div className={`fr`}>
                        <span>店铺合计(含运费)：</span>
                        <span className={`f20 fwb red`}>￥245.00</span>
                    </div>
                </div>
            </div>
            <div className={`tr`}>
                <a className={`${styles.submitOrder}`}>提交订单</a>
            </div>
        </div>
    )
}


export default GoodsArea;
