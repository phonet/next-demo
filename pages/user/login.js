import React, {useCallback, useState} from "react";
import LoginForm from "../../components/User/LoginForm";
import {login, loginApi} from "../../api/Api";
import {message} from "antd";
import {saveLoginStorage, saveToken} from "../../util/saveLogin";
import Router from "next/router";

/**
 * 登录
 * 2020/6/1 12:11 上午 BY TF
 */
const Login = () => {
    const [loading, setLoading] = useState(false);
    const loginSubmit = useCallback(async (sendData) => {
        try {
            setLoading(true);
            const res = await loginApi(sendData);
            setLoading(false);
            if (res.status === 200) {
                message.success('登录成功');
                saveToken(res.data);
                await Router.replace('/');
            } else {
                message.error('登录失败');
            }
        } catch (e) {
            setLoading(false);
        }
    }, [])

    return (
        <LoginForm onFinish={loginSubmit}
                   loading={loading}
        />
    )
}


export default Login;
