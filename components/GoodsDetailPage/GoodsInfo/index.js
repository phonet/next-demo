import React from "react";
import {Input, Radio} from "antd";
import styles from './index.less';
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import MinusOutlined from "@ant-design/icons/lib/icons/MinusOutlined";
import InputBuyNumber from "../../InputBuyNumber";

/**
 * 商品详情介绍
 * 2020/5/29 12:05 上午 BY TF
 */
const GoodsInfo = () => {
    return (
        <div className={`${styles.goodsInfoWrap} fl`}>
            <h1 className={styles.goodsName}>Freeplus芙丽芳丝保湿面霜40克 保湿补水紧致滋润面霜日晚霜女男</h1>
            <p className={styles.goodsDesc}>
                保湿界的黑马选手——芙丽芳丝保湿面霜，价格美丽，效果杠把子！无添加、低刺激芙丽芳丝的头牌武器，涂抹在脸上凉凉的润润的，能够感受到肌肤在用力喝水，被水营养撑起饱满感~肤水嘟嘟的，就像打了水光针！
            </p>
            <div className={styles.goodsPriceWrap}>
                <p>
                    <span className={styles.title}>售价</span>
                    <span className={styles.nowPrice}>¥519</span>
                    <span className={styles.marketPrice}>市场价 ¥630</span>
                </p>
                <p>
                    <span className={styles.title}>税费</span>
                    <span>预估....</span>
                </p>
                <p>
                    <span className={styles.title}>运费</span>
                    <span>韩国至成都 10元</span>
                </p>
                <p>
                    <span className={styles.title}>销量</span>
                    <span>12200</span>
                </p>
            </div>
            <div className={`${styles.skuWrap} fcb`}>
                <span className={`${styles.title} fl`}>选择</span>
                <ul className={`${styles.skuList} fl`}>
                    <li><a href="" className={styles.skuName}>ahc神仙水乳套装（水乳各100ml+水乳中样）</a></li>
                    <li><a href="" className={styles.skuName}>ahc神仙水乳套装（水乳中样）</a></li>
                </ul>
            </div>
            <div className={`${styles.colorWrap} fcb`}>
                <span className={`${styles.title} fl`}>颜色</span>
                <div className={`fl`}>
                    <Radio.Group size={'small'} buttonStyle="solid">
                        <Radio.Button value={1}>红色</Radio.Button>
                        <Radio.Button value={2}>蓝色</Radio.Button>
                    </Radio.Group>
                </div>
            </div>
            <div className={`${styles.buyNum} fcb`}>
                <span className={`${styles.title} fl`}>数量</span>
                <div className={`fl`}>
                    <InputBuyNumber/>
                </div>
            </div>
            <div className={styles.buyBtnWrap}>
                <a className={`${styles.buyBtn} ${styles.buyNow}`}>立即购买</a>
                <a className={`${styles.buyBtn} ${styles.addCar}`} href={'/car'} target={'_blank'}>加入购物车</a>
            </div>
        </div>
    )
}


export default GoodsInfo;
