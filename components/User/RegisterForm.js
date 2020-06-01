import React from "react";
import styles from './styles.less';
import {Button, Form, Input} from "antd";

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
                          onFinishFailed
                      }) => {
    return (
        <div className={styles.userWrap}>
            <div className={styles.title}>免费注册</div>
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
                    name="code"
                    rules={[{required: true, message: '请输入验证码'}]}
                    className={styles.codeItem}
                >
                    <Input prefix={<i className={`${styles.userIcon} ${styles.code}`}/>}
                           suffix={<a type="primary" className={styles.codeBtn}>获取验证码</a>}
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
                <Button type="primary" htmlType="submit">注册</Button>
                <div className={styles.bottom}>
                    <a className={`gary`} onClick={() => history.back()}>返回登录</a>
                </div>
            </Form>
        </div>
    )
}


export default RegisterForm;
