import React, {useState} from "react";
import styles from './styles.less';
import {Button, Form, Input, useForm} from "antd";
import CodeBtn from "./CodeBtn";
import Router from "next/router";

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
const RegisterForm = ({
                          onFinish,
                          onFinishFailed,
                          loading
                      }) => {

    const [formData, setFormData] = useState({});
    const [form] = Form.useForm();
    return (
        <div className={styles.userWrap}>
            <div className={styles.title}>免费注册</div>
            <Form
                {...layout}
                name="login"
                // initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                form={form}
                onValuesChange={(changedValues, all) => {
                    setFormData(all);
                }}
            >
                <Form.Item
                    name="username"
                    rules={[{required: true, message: '请输入用户名'}, {
                        pattern: /^1(3|4|5|6|7|8|9)\d{9}$/,
                        message: '请输入有效手机号'
                    }]}
                >
                    <Input prefix={<i className={`${styles.userIcon} ${styles.phone}`}/>}
                           placeholder={'请输入手机号'}
                           maxLength={11}
                    />
                </Form.Item>

                <Form.Item
                    name="code"
                    rules={[{required: true, message: '请输入验证码'}]}
                    className={styles.codeItem}
                    maxLength={6}
                >
                    <Input prefix={<i className={`${styles.userIcon} ${styles.code}`}/>}
                           suffix={<CodeBtn mobile={formData.username}/>}
                           placeholder={'请输入验证码'}
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
                <Button type="primary" loading={loading} disabled={loading} htmlType="submit">注册</Button>
                <div className={styles.bottom}>
                    <a className={`gary`} onClick={() => Router.replace('/user/login')}>返回登录</a>
                </div>
            </Form>
        </div>
    )
}


export default RegisterForm;
