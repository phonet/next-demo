import axios from 'axios'

const request = axios.create({
    baseURL: 'http://139.9.113.127:8080',
    timeout: 10000,
})

// 拦截器
request.interceptors.response.use((response) => {
    return response
}, (error) => {
    return Promise.reject(error)
})
request.interceptors.request.use((config) => {
    const token = '';//getToken();
    return {
        ...config,
        headers: {
            Authorization: token ? `Bearer ${token}` : '',
            Accept: 'application/json',
            'Content-Type': 'application/json; charset=utf-8',
        },
        //data: config.param ? JSON.stringify(config.param) : ''

    };
}, (error) => {
    return Promise.reject(error)
})

export default request
