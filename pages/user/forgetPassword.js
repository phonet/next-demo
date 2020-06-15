import React, {useCallback, useState} from 'react';
import ForgetPwdForm from '../../components/User/ForgetPwdForm';
import {forgetPwdApi, registerUserApi} from '../../api/Api';
import {message} from 'antd';
import RegisterForm from '../../components/User/RegisterForm';

/**
 * 忘记密码
 * 2020/6/2 1:30 上午 BY TF
 */
const forgetPassword = () => {
    const [loading, setLoading] = useState(false);
    const submitRestPwd = useCallback(async (sendData) => {
        try {
            setLoading(true);
            const res = await forgetPwdApi(sendData);
            setLoading(false);
            if (res.code === 20000) {
                message.success('修改成功,请返回登录');
            } else {
                message.error(`${res.message || '修改失败'}`);
            }
        } catch (e) {
            setLoading(false);
            message.error('接口异常');
        }
    }, []);

    return (
        <ForgetPwdForm onFinish={submitRestPwd}
                       loading={loading}
        />
    );
};


export default forgetPassword;
