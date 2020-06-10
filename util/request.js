import axios from 'axios';
import {clearLoginStorage, getToken} from './saveLogin';
import Router from 'next/router';
import {message} from 'antd';

export let serverAuthorization = Object.create(null);//服务端调接口需要用户认证时的token,初始化渲染的时候给其赋值的
//不需要token的api接口列表
const allowApiList = [
    '/services/merchants/api/article-infos-c',
];

const request = axios.create({
    baseURL: 'http://139.9.113.127:8080',
    timeout: 30000,
});

// 拦截器
request.interceptors.response.use((response) => {
    // console.log(response)
    let resObj = {};
    if (response.data && response.data.code === 20000) {
        /*if (process.browser) {
            resObj = {
                code: response.data.code,
                data: response.data.data
            }
        } else { //服务端,直接返回数据
            resObj = {...response.data.data}
        }*/
        resObj = {
            code: response.data.code,
            data: response.data.data
        };
    } else {
        resObj = {
            code: response.data.code,
            message: response.data.message,
            data: null
        };
        /*if (process.browser) {
            resObj = {
                code: response.data.code,
                message: response.data.message,
                data: null
            }
        }*/
    }
    return resObj;
}, (error) => {
    const res = error.response || {};
    console.log(res.status);
    if (process.browser && res.status === 401) { //客户端渲染的时候才需要,登录过期,跳转首页
        // console.log('---->');
        clearLoginStorage();
        message.error('登录过期,请重新登录');
        Router.replace('/user/login');
    }
    return Promise.reject(error);
});
request.interceptors.request.use((config) => {
    //const token = process.browser //(getToken() || {}) : serverAuthorization;
   // console.log(config.url);
    let auth = '';
    if (process.browser) {
        auth = getToken()['access_token'] || '';
    } else { // 服务端请求
        auth = '';//request['access_token'] || '';
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
    return Promise.reject(error);
});

export default request;
