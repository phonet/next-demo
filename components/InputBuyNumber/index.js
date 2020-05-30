import React from "react";
import styles from './index.less';
import MinusOutlined from "@ant-design/icons/lib/icons/MinusOutlined";
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import {Input} from "antd";

/**
 * 输入购买数量的框框
 * 2020/5/31 2:33 上午 BY TF
 */
const InputBuyNumber = () => {
    return (
        <div className={styles.buyInputWrap}>
            <Input addonBefore={<a className={`${styles.numBtn} ${styles.cut}`}><MinusOutlined/></a>}
                   addonAfter={<a className={`${styles.numBtn} ${styles.add}`}><PlusOutlined/></a>}
                   className={styles.buyNumInput}
                   size={'small'}
            />
        </div>
    )
}


export default InputBuyNumber;
