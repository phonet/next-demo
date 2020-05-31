import React, {useState} from "react";
import styles from './index.less';
import AddressModal from "../../AddressModal";

/**
 * 收货地址
 * 2020/5/31 9:12 下午 BY TF
 */
const Address = () => {
    const [visible, setVisible] = useState(false)

    const testArr = new Array(6).fill(1);

    return (
        <div className={`contentWidth`}>
            <div className={styles.title}>选择收货地址</div>
            <div className={`${styles.addressList} fcb`}>
                {
                    testArr.map((o, i) => {
                        return (
                            <div className={`${styles.item} ${i === 0 ? styles.active : ''}`} key={i}>
                                <div className={`${styles.nameWrap} fcb`}>
                                    <span className={`${styles.name} fl`}>李明芝  收 </span>
                                    {i === 0 && <span className={`${styles.default} fr`}>默认</span>}
                                </div>
                                <div className={styles.address}>四川省 成都市 郫都区 犀浦镇 犀浦校园路111号傲城</div>
                                <div>135****1241</div>
                                <a className={styles.modifyBtn}>修改</a>
                            </div>
                        )
                    })
                }
            </div>
            <a className={styles.modifyAddrBtn} onClick={() => setVisible(true)}>+新建地址</a>
            <AddressModal visible={visible}
                          onCancel={() => {
                              setVisible(false)
                          }}
                          onOk={(values) => {
                              console.log(values)
                          }}
            />
        </div>
    )
}


export default Address;
