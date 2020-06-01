import React from "react";
import styles from './styles.less';
import {Button, Form, Input} from "antd";
import Router from 'next/router'

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 24},
};
const tailLayout = {
    wrapperCol: {offset: 0, span: 24},
};

/**
 * 登录表单
 * 2020/6/2 1:56 上午 BY TF
 */
const LoginForm = ({
                       onFinish,
                       onFinishFailed
                   }) => {
    return (
        <div className={styles.userWrap}>
            <div className={styles.title}>密码登录</div>
            <Form
                {...layout}
                name="login"
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name="username"
                    rules={[{required: true, message: '请输入用户名'}]}
                >
                    <Input prefix={<i className={`${styles.userIcon} ${styles.phone}`}/>}
                           placeholder={'请输入手机号'}
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{required: true, message: '请输入密码'}]}
                >
                    <Input.Password prefix={<i className={`${styles.userIcon} ${styles.pwd}`}/>}
                                    placeholder={'请输入登录密码'}
                    />
                </Form.Item>
                <div className={`${styles.forgetPwd} tr`}>
                    <a className={styles.alink} href={'/user/forgetPassword'}>忘记密码</a>
                </div>
                <Button type="primary" className={`${styles.loginItem}`} htmlType="submit" onClick={() => {Router.replace('/')}}>登录</Button>
                <div className={styles.bottom}>
                    <a href={'/user/register'}>免费注册</a>
                </div>
            </Form>
        </div>
    )
}


export default LoginForm;
