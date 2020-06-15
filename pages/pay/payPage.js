import React, {useCallback, useEffect, useState} from 'react';
import styles from './index.less';
import HtmlHead from '../../components/HtmlHead';
import SearchArea from '../../components/SearchArea';
import {useRouter} from 'next/router';
import {getOrderPayQrcodeApi, getPayResultApi} from '../../api/Api';
import {message, Spin} from 'antd';
import {getPicUrl} from '../../util/Utils';
import Router from 'next/router';

let timer = null;

/**
 * 订单支付页面
 * 2020/6/14 11:10 上午 BY TF
 */
const PayPage = () => {
    const [loading, setLoading] = useState(false);
    const [payType, setPayType] = useState(1);
    const [qrcode, setQrcode] = useState('');
    const [order, setOrder] = useState({});
    const router = useRouter();

    const getOrderPayQrcode = useCallback(async (type) => {
        let orderId = router.query && router.query.orderId || '';
        try {
            setLoading(true);
            const res = await getOrderPayQrcodeApi({orderId, payType: type});
            console.log(res);
            setLoading(false);
            if (res.code === 20000) {
                setQrcode(res.data.payQr);
                setPayType(type);
                setOrder(res.data.order);
            } else {
                message.error(`${res.message || '或者支付二维码失败'}`);
            }
        } catch (e) {
            message.error(`接口异常`);
            setLoading(false);
        }

    }, []);

    const getPayResult = useCallback(async () => {
        console.log('等待支持....');
        // if (!qrcode) return;
        try {
            let orderId = router.query && router.query.orderId || '';
            const res = await getPayResultApi(orderId);
            if (res.code === 20000 && res.data) {
                timer && clearInterval(timer);
                // message.success('支付成功');
                Router.replace(`/pay/payResult?orderId=${orderId}`);
            }
        } catch (e) {

        }
    }, []);

    useEffect(() => {
        getOrderPayQrcode(payType);
        timer = setInterval(() => {
            getPayResult();
        }, 1000);
        return () => {
            timer && clearInterval(timer);
        };
    }, []);

    return (
        <Spin spinning={loading}>
            <HtmlHead title={'请支付'}/>
            <SearchArea noSearch={true}/>
            <div className={`contentWidth`}>
                <div className={styles.successWrap}>
                    <div className={`${styles.titleWrap} fcb`}>
                        <img src="/static/images/icons/icon_success.png" width={50} height={50} alt=""/>
                        <div className={`${styles.tipsWrap}`}>
                            <div className={styles.title}>订单提交成功，现在只差最后一步啦！</div>
                            <div>请您在提交订单后<span className={`red`}>2小时</span>内完成支付，否则订单会自动取消！</div>
                        </div>
                    </div>
                    <div className={styles.addressWrap}>
                        收货信息：{order.receiverDetailAddress || '--'}，手机：{order.memberUsername}
                    </div>
                </div>
                <div className={styles.payTypeWrap}>
                    <div>请选择支付方式：</div>
                    <div className={`${styles.payIconWrap} fcb`}>
                        <div className={`${styles.payIcon} ${payType === 1 ? styles.active : ''} fl`}
                             onClick={() => {
                                 if (payType === 1) return;
                                 // setPayType(1);
                                 getOrderPayQrcode(1);
                             }}
                        >
                            <img src="/static/images/icons/icon_ali_pay.png" alt=""/>
                        </div>
                        <div className={`${styles.payIcon} ${payType === 2 ? styles.active : ''} fl`}
                             onClick={() => {
                                 if (payType === 2) return;
                                 // setPayType(2);
                                 getOrderPayQrcode(2);
                             }}
                        >
                            <img src="/static/images/icons/icon_wx_pay.png" alt=""/>
                        </div>
                    </div>
                    <div>
                        <span className={`color6`}>支付金额：</span>
                        <span className={`${styles.totalMoney} red`}>￥{order.payAmount || '0.00'}</span>
                    </div>
                    <div className={`${styles.payScanWrap}`}>
                        <div className={styles.payImgWrap}>
                            <div className={`f16 tc`}>请扫码支付（元）<span
                                className={`red`}>￥{order.payAmount || '0.00'}</span></div>
                            <div className={styles.payImg}>
                                {
                                    qrcode ?
                                        <>
                                            <img src={getPicUrl(qrcode)} className={`${styles.qrImg}`} alt=""/>
                                            <div className={`${styles.payTypeTips} fcb`}>
                                                <img className={`${styles.iconScan} fl`}
                                                     src="/static/images/icons/icon_scan1.png"
                                                     alt=""/>
                                                <div className={`fl`}>
                                                    <span>打开手机{payType === 1 ? '支付宝' : '微信'}</span><br/>
                                                    <span>扫一扫进行付款</span>
                                                </div>
                                            </div>
                                            <img src="/static/images/icons/icon_scan.png" className={`${styles.tipImg}`}
                                                 alt=""/>
                                        </>
                                        :
                                        <div/>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Spin>
    );
};


export default PayPage;
