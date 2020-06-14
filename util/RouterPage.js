import Router from 'next/router';

//跳转到商品详情
export const goGoodsDetails = (goodsId, storeId) => {
    Router.push(`/goodsDetail?storeId=${storeId}&goodsId=${goodsId}`);
};

//跳转到订单详情
export const goOrderDetail = (orderId) => {
    Router.push(`/orderDetail?orderId=${orderId}`);
};

//跳转到分类详情
export const goCategoryDetail = () => {
    // Router.push(`/orderDetail?orderId=${orderId}`);
};

//跳转到商户详情
export const goStoreDetail = () => {
    // Router.push(`/orderDetail?orderId=${orderId}`);
};


//付款页面
export const goPayPage = (orderId) => {
    Router.push(`/pay/payPage?orderId=${orderId}`);
};

//提交订单页面
export const goSubmitOrder = (cartIds) => {
    Router.push(`/submitOrder?cartIds=${cartIds}`);
};
