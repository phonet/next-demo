import React, {useState} from 'react';
import HtmlHead from '../components/HtmlHead';
import SearchArea from '../components/SearchArea';
import Address from '../components/PageSubmitOrder/Address';
import GoodsArea from '../components/PageSubmitOrder/GoodsArea';
import {message} from 'antd';
import {submitOrderApi} from '../api/Api';
import Router from 'next/router';
import {goPayPage} from '../util/RouterPage';

/**
 * 提交购物车
 * 2020/5/31 8:59 下午 BY TF
 */
const SubmitOrder = () => {
    const [addressId, setAddressId] = useState('');
    const [loading, setLoading] = useState(false);

    return (
        <>
            <HtmlHead title={'提交订单'}/>
            <SearchArea noSearch={true}/>
            <div className={`bw`}>
                <Address onGetAddressId={id => {
                    console.log(id);
                    setAddressId(id);
                }}/>
                <GoodsArea submitLoading={loading}
                           onSubmit={async val => {
                               if (!addressId) {
                                   message.info('请先选择一个收货地址');
                                   return;
                               }
                               const sendData = {
                                   ...val,
                                   memberReceiveAddressId: addressId
                               };
                               setLoading(true);
                               try {
                                   const res = await submitOrderApi(sendData);
                                   setLoading(false);
                                   if (res.code === 20000) {
                                       //message.success('提交成功,请支付吧');
                                       goPayPage(res.data.order.id);
                                       // Router.push(`/pay/payPage?orderId=${res.data.order.id}`);
                                   } else {
                                       message.error(`${res.message || '提交失败,请重试'}`);
                                   }
                               } catch (e) {
                                   setLoading(false);
                               }
                           }}/>
            </div>
        </>
    );
};


export default SubmitOrder;
