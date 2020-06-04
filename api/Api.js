import request from "../util/request";

//登录
export const loginApi = async (sendData) => {
    return request.post('/auth/login', sendData);
}

//获取验证码
export const getValidateCodeApi = async (mobile) => {
    return request.get(`/services/uaa/api/send-validation-code/${mobile}`)
}

//用户注册
export const registerUserApi = async (sendData) => {
    return request.get(`/services/uaa/api/user/mobile-quick-login/${sendData.username}`, {params: sendData});
}


//根据用户id获取用户信息
export const getUserByIdApi = async (id) => {
    return request.get(`/services/uaa/api/query-users/${id}`);
}


/**********index*********/
//根据分类级别获取商品分类信息
export const getCategoryApi = async (level) => {
    return request.get(`/services/merchants/api/goods-categories-by-level/${level}`);
}

//获取所有分类接口
export const getAllCategoryApi = async () => {
    return request.get(`/services/merchants/api/c-goods-categories`)
}

//根据位置获取广告信息:位置类型 1 顶部轮播 2 弹窗 3 A区广告位 4 b区广告
export const getBannerByPositionApi = async (positionType) => {
    return request.get(`/services/merchants/api/c-banner-infos?positionType=${positionType}`);
}

//获取商品推荐专区广告列表goodsRecommendType:1单品推荐 2:专区广告
export const getGoodsRecommendApi = async (goodsRecommendType) => {
    return request.get(`/services/merchants/api/c-goods-recommends?goodsRecommendType=${goodsRecommendType}`)
}
