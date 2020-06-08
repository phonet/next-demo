import React from 'react';
import styles from './index.less';
import ShoppingCartOutlined from '@ant-design/icons/lib/icons/ShoppingCartOutlined';
import DeleteOutlined from '@ant-design/icons/lib/icons/DeleteOutlined';
import {ConfirmModal} from '../../ModalAlert';

/**
 * 收藏项
 * 2020/6/6 8:41 下午 BY TF
 */
const CollectItem = ({
                         onDelete,
                         item = {}
                     }) => {
    return (
        <a href=""
           className={`${styles.goodsItem}`}
            //style={tempStyle}
        >
            <img src="../../../static/images/test/goods.jpg" className={styles.goodsImg} alt=""/>
            <div className={styles.goodsDesc}>
                <p className={styles.goodsName}>Kiehl's 科颜氏 金盏花植物精华水金盏花植物精华</p>
                <p className={styles.priceWrap}>
                    <span className={styles.nowPrice}>¥519</span>
                    <span className={styles.marketPrice}>市场价 ¥630</span>
                </p>
                <p className={styles.storeName}>春雨（papa recipe）海外旗舰店</p>
                <div className={`${styles.totalSaleWrap} fcb`}>
                    <p className={`${styles.saleTotal} fl fcb`}>
                        销量：<span className={styles.num}>85万</span>
                    </p>
                    <span className={`${styles.car} fr`}><ShoppingCartOutlined
                        style={{fontSize: 24, color: '#F33A3F'}}/></span>
                </div>
            </div>
            <div className={styles.deleteCollect}
                 onClick={(e) => {
                     e.preventDefault();
                     ConfirmModal({
                         title: '提示',
                         constentText: '确定要删除此收藏的商品么?',
                         onOk: () => {
                             return onDelete(item.id);
                         }
                     });
                 }}
            >
                <DeleteOutlined/>
            </div>
        </a>
    );
};


export default CollectItem;
