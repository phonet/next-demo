import React from "react";
import styles from './index.less';

/**
 * 订单项
 * 2020/6/1 12:53 上午 BY TF
 */
const ListItem = ({
                      status
                  }) => {
    const testArr = new Array(2).fill(1);
    return (
        <div className={styles.orderItem}>
            <div className={`${styles.header} fcb`}>
                <span className={`gray fl`}>订单号: 1001203200855770527    创建时间：2020-05-06 10:00</span>
                <span className={`black fr`}>店铺：海外专营店</span>
            </div>
            <div className={`fcb`}>
                <div className={`fl`}>
                    {
                        testArr.map((o, i) => {
                            return (
                                <div className={`${styles.itemInner} fcb`} key={i}>
                                    <img className={`${styles.goodsImg} fl`} src="/static/images/test/goods.jpg"
                                         alt=""/>
                                    <div className={`${styles.goodsName} black fl`}>Freeplus芙丽芳丝保湿面霜40克 保湿补水紧致滋润面霜日晚霜女男
                                    </div>
                                    <div className={`${styles.size} gray fl`}>
                                        <span>颜色：天蓝</span><br/>
                                        <span>尺码：S</span>
                                    </div>
                                    <div className={`${styles.price} fl black`}>￥120.00</div>
                                    <div className={`${styles.num} fl black`}>1</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={`${styles.ralPay} fl`} style={{height: testArr.length * 90}}>
                    <div className={styles.content}>
                        <span className={`red`}>￥120.00</span><br/>
                        <span className={`color6`}>(含运费、税费)</span>
                    </div>
                </div>
                <div className={`${styles.ralPay} fl`} style={{height: testArr.length * 90}}>
                    <div className={styles.content}>
                        <span className={`color6`}>交易关闭</span><br/>
                        <a className={`color6`} href={'/orderDetail'}>订单详情</a>
                    </div>
                </div>
                <div className={`${styles.action} fl`} style={{height: testArr.length * 90}}>
                    <div className={styles.content}>
                        <a className={`color6`}>再次购买</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ListItem;
