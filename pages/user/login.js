import React, {useCallback, useState} from 'react';
import LoginForm from '../../components/User/LoginForm';
import {getUserByIdApi, login, loginApi} from '../../api/Api';
import {message} from 'antd';
import {saveLoginStorage, saveToken} from '../../util/saveLogin';
import Router from 'next/router';

/**
 * 登录
 * 2020/6/1 12:11 上午 BY TF
 */
const Login = () => {
    const [loading, setLoading] = useState(false);
    const loginSubmit = useCallback(async (sendData) => {
        try {
            setLoading(true);
            const res = await loginApi({...sendData, webType: 'user'});
            setLoading(false);
            console.log(res);
            if (res.code === 20000) {
                //message.success('登录成功');
                saveToken(res.data);
                getUserInfo(res.data.id);
                //await Router.replace('/');
            } else {
                message.error(`${res.message || '登录失败'}`);
            }
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }, []);

    const getUserInfo = async (id) => {
        try {
            const res = await getUserByIdApi(id);
            if (res.code === 20000) {
                message.success('登录成功');
                setLoading(false);
                saveLoginStorage(res.data);
                await Router.replace('/');
            } else {
                message.error(`${res.message || '登录失败'}`);
            }
        } catch (e) {
            setLoading(false);
            message.error(`用户信息登录失败`);
        }
    };

    return (
        <LoginForm onFinish={loginSubmit}
                   loading={loading}
        />
    );
};


export default Login;
