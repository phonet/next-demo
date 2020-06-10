import React from 'react';
import styles from './index.less';
import MinusOutlined from '@ant-design/icons/lib/icons/MinusOutlined';
import PlusOutlined from '@ant-design/icons/lib/icons/PlusOutlined';
import {Input} from 'antd';

/**
 * 输入购买数量的框框
 * 2020/5/31 2:33 上午 BY TF
 */
const InputBuyNumber = ({
                            value,
                            onChange,
                            onAddHandle,
                            onCuteHandle
                        }) => {
    return (
        <div className={styles.buyInputWrap}>
            <Input addonBefore={<span onClick={() => value > 1 && onCuteHandle && onCuteHandle(value * 1 - 1)}
                                      className={`${styles.numBtn} ${value < 2 ? styles.disabled : ''}`}><MinusOutlined/></span>}
                   addonAfter={<span onClick={() => onAddHandle && onAddHandle(value * 1 + 1)}
                                  className={`${styles.numBtn} `}><PlusOutlined/></span>}
                   className={styles.buyNumInput}
                   size={'small'}
                   value={value}
                   onChange={(e) => {
                       const value = e.target.value;
                       if (isNaN(value) || value < 1) return;
                       console.log(value);
                       onChange && onChange(value);
                   }}
            />
        </div>
    );
};


export default InputBuyNumber;
