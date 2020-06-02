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
