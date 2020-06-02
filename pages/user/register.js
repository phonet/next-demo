import React, {useCallback, useState} from "react";
import RegisterForm from "../../components/User/RegisterForm";
import {registerUserApi} from "../../api/Api";
import {sendData} from "next/dist/next-server/server/api-utils";
import {message} from "antd";

/**
 * 注册
 * 2020/6/2 1:29 上午 BY TF
 */
const Register = () => {
    const [loading, setLoading] = useState(false)
    const submitRegister = useCallback(async (sendData) => {
        try {
            setLoading(true);
            const res = await registerUserApi(sendData);
            setLoading(false);
            if (res.status === 200 && res.data.code === 20000) {
                message.success('注册成功,请返回登录');
            } else {
                message.error(`${res.data.message || '注册失败'}`)
            }
        } catch (e) {
            setLoading(false);
        }
    }, [])

    return (
        <RegisterForm onFinish={submitRegister}
                      loading={loading}
        />
    )
}


export default Register;
