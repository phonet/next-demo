import {Modal} from 'antd';
import React from 'react';
import styles from './index.less';

export const ConfirmModal = ({
                                 title = '提示',
                                 constentText = '确认要删除吗?',
                                 maskClosable = true,
                                 onOk
                             }) => {
    Modal.confirm({
        title: title,
        className: styles.ConfirmModal,
        okText: '确定',
        cancelText: '取消',
        maskClosable: maskClosable,
        centered: true,
        onOk: () => {
            const res = onOk && onOk();
            console.log(res);
            if (!!res && typeof res.then === 'function') { //如果是promise
                return res;
            }
            if (res) { //根据确定按钮的返回值来确定是否关闭
                return Promise.resolve();
            }
            return Promise.reject('不能关闭');
        },
        content: (
            <div>{constentText}</div>
        )
    });
};
