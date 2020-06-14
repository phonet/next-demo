import React from 'react';
import styles from './index.less';
import {Popover, Steps} from 'antd';

const {Step} = Steps;
/**
 * 订单进度
 * 2020/6/1 2:02 上午 BY TF
 */
const OrderStep = ({
                       status
                   }) => {
    return (
        <div className={styles.stepWrap}>
            <Steps labelPlacement={'vertical'}>
                <Step description={<span className={`black`}>1.提交订单</span>}
                      icon={<i className={`${styles.icon} ${styles.tj}`}/>}/>
                {

                }
                <Step description={<span className={`black`}>2.付款成功</span>}
                      icon={<i className={`${styles.icon} ${styles.fk}`}/>}/>
                <Step description={<span className={`black`}>3.商户发货</span>}
                      icon={<i className={`${styles.icon} ${styles.fh}`}/>}/>
                <Step description={<span className={`black`}>4.确认收货</span>}
                      icon={<i className={`${styles.icon} ${styles.sh}`}/>}/>
            </Steps>
        </div>
    );
};


export default OrderStep;
