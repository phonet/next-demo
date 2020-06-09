import request from '../util/request';
import {sendData} from 'next/dist/next-server/server/api-utils';

//登录
export const loginApi = async (sendData) => {
    return request.post('/auth/login', sendData);
};

//获取验证码
export const getValidateCodeApi = async (mobile) => {
    return request.get(`/services/uaa/api/send-validation-code/${mobile}`);
};

//用户注册
export const registerUserApi = async (sendData) => {
    return request.get(`/services/uaa/api/user/mobile-quick-login/${sendData.username}`, {params: sendData});
};


//根据用户id获取用户信息
export const getUserByIdApi = async (id) => {
    return request.get(`/services/uaa/api/query-users/${id}`);
};


/**********首页*********/
//根据分类级别获取商品分类信息
export const getCategoryApi = async (level) => {
    return request.get(`/services/merchants/api/goods-categories-by-level/${level}`);
};

//获取所有分类接口
export const getAllCategoryApi = async () => {
    return request.get(`/services/merchants/api/c-goods-categories`);
};

//根据位置获取广告信息:位置类型 1 顶部轮播 2 弹窗 3 A区广告位 4 b区广告
export const getBannerByPositionApi = async (positionType) => {
    return request.get(`/services/merchants/api/c-banner-infos?positionType=${positionType}`);
};

//获取商户推荐list
export const getStoreAdApi = async () => {
    return request.get(`/services/merchants/api/store-recommends-list`);
};

//获取商品推荐专区广告列表goodsRecommendType:1单品推荐 2:专区广告
export const getGoodsRecommendApi = async (goodsRecommendType) => {
    return request.get(`/services/merchants/api/c-goods-recommends?goodsRecommendType=${goodsRecommendType}`);
};

//获取专区数据
export const getSpecialGoodsApi = async () => {
    return request.get(`/services/merchants/api/c-goods-recommends-all`);
};

/**********order*********/
//获取我的订单列表
export const getOrderListApi = (sendData) => {
    return request.get(`/services/merchants/api/my-order`, {params: sendData});
};


/**********用户收货地址相关*********/
//获取地址列表
export const getAddressListApi = () => {
    return request.get(`/services/merchants/api/user-addresses`, {params: {page: 0, size: 999}});
};

//修改地址api
export const modifyAddressApi = (sendData) => {
    const url = '/services/merchants/api/user-addresses';
    if (sendData.id) {
        return request.put(url, sendData);
    }
    return request.post(url, sendData);
};

//获取全部区域
export const getAllAreasApi = () => {
    return request.get(`/services/merchants/api/global-regions-all`);
};

//设置默认地址
export const setDefaultAddressApi = (id) => {
    return request.put(`/services/merchants/api/update-default-user-addresses/${id}`);
};

//删除地址
export const deleteAddressApi = (id) => {
    return request.delete(`/services/merchants/api/user-addresses/${id}`);
};

/**********收藏商品相关*********/
//收藏商品列表
export const getCollectApi = (sendData) => {
    return request.get(`/services/merchants/api/collect/get`, {params: sendData});
};

//添加收藏商品
export const addCollectApi = (goodsId) => {
    return request.post(`/services/merchants/api/collect/add/${goodsId}`);
};

//刪除收藏商品
export const deleteCollectApi = (goodsId) => {
    return request.delete(`/services/merchants/api/collect/delete/${goodsId}`);
};

//获取当前用户是否收藏该商品
export const isCollectApi = (goodsId) => {
    return request.get(`/services/merchants/api/collect/is-collect-goods/${goodsId}`);
};

/**********关注的商户相关*********/
//获取列表
export const getFollowApi = (sendData) => {
    return request.get(`/services/merchants/api/follow/get`, {params: sendData});
};

//添加关注店铺
export const addFollowApi = (storeId) => {
    return request.post(`/services/merchants/api/follow/add/${storeId}`);
};

//删除关注店铺
export const deleteFollowApi = (storeId) => {
    return request.delete(`/services/merchants/api/follow/delete/${storeId}`);
};

//检测用户是否关注的了该店铺
export const isFollowApi = (id) => {
    return request.get(`/services/merchants/api/follow/is-follow-store/${id}`);
};

/**********文章相关*********/
//根据条件获取文件分页列表,需要添加排序 sort=top,desc
export const getArticleListApi = (sendData) => {
    return request.get(`/services/merchants/api/article-infos-c`, {params: sendData});
};

//根据id修改文章增加文字阅读数
export const modifyReadNumApi = (id) => {
    return request.put(`/services/merchants/api/update-pageview-article-infos/${id}`);
};

//根据id获取文章详情
export const getArticleDetailApi = (id) => {
    return request.get(`/services/merchants/api/article-infos/${id}`);
};


/**********分类商品列表*********/
//根据分类id获取品牌列表
export const getBrandListByCategoryIdApi = (id) => {
    return request.get(`/services/merchants/api/find-list-brand-by-condition-by-c`);
};

//根据分类获取商品信息
export const getGoodsListApi = (sendData) => {
    return request.get(`/services/merchants/api/find-list-goods-by-condition-by-c`, {params: sendData});
};


/**********商品详情*********/
//根据店铺id获取商品列表
export const getStoreGoodsListApi = (sendData) => {
    return request.get(`/services/merchants/api/goods-by-condition-by-c`, {params: sendData});
};

//获取商品详情（包括sku-属性--分类信息）
export const getGoodsDetailApi = (id) => {
    return request.get(`/services/merchants/api/goods/${id}`);
};
