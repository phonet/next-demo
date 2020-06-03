import axios from 'axios'
import {getToken} from "./saveLogin";

export let serverAuthorization = Object.create(null);//服务端调接口需要用户认证时的token,初始化渲染的时候给其赋值的

const request = axios.create({
    baseURL: 'http://139.9.113.127:8080',
    timeout: 10000,
})

// 拦截器
request.interceptors.response.use((response) => {
    console.log(response)
    let resObj = {};
    if (response.data && response.data.code === 20000) {
        if (process.browser) {
            resObj = {
                code: response.data.code,
                data: response.data.data
            }
        } else { //服务端,直接返回数据
            resObj = {...response.data.data}
        }
        // return  response.data.data
    } else {
        if (process.browser) {
            resObj = {
                code: response.data.code,
                message: response.data.message,
                data: null
            }
        }
    }
    return resObj;
}, (error) => {
    console.log(error)
    return Promise.reject(error)
})
request.interceptors.request.use((config) => {
    //const token = process.browser //(getToken() || {}) : serverAuthorization;
    let auth = '';
    if (process.browser) {
        auth = getToken()['access_token'] || ''
    } else {
        auth = request['access_token'] || '';
    }
    return {
        ...config,
        headers: {
            Authorization: `${auth ? 'Bearer ' + auth : ''}`,
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
        },
        //data: config.param ? JSON.stringify(config.param) : ''

    };
}, (error) => {
    return Promise.reject(error)
})

export default request
