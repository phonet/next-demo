import App from 'next/app';
import '../static/styles/base.less';
import LayoutBasic from '../components/Layout/BasicLayout';
import React from 'react';
import getCofnig from 'next/config'
import UserLayout from "../components/Layout/UserLayout";
import {getLoginStorage, getToken} from "../util/saveLogin";
import request from "../util/request";

const {serverRuntimeConfig, publicRuntimeConfig} = getCofnig()

// console.log(serverRuntimeConfig, publicRuntimeConfig)

class NextApp extends App {

    //服务端渲染调用的方法
    static async getInitialProps({Component = {}, ctx}) {
        const userInfo = getLoginStorage(ctx);
        const token = getToken(ctx) || {};
        // console.log(token)
        //serverAuthorization = {access_token: token.access_token};
        // 需要将token赋值给服务端请求
        request['access_token'] = token.access_token;
        // console.log(request)
        let pageProps;
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        return {
            pageProps,
            userInfo
        };

    }

    render() {
        const {Component, pageProps, store, router = {}, userInfo} = this.props;
        const {pathname} = router;
        // console.log(router)
        // console.log(pathname)
        if (pathname.indexOf('/user/') === 0) { //用户登录模块
            return (
                <UserLayout>
                    <Component {...pageProps} router={router}/>
                </UserLayout>
            )
        }
        return (
            <LayoutBasic userInfo={userInfo}>
                <Component {...pageProps} router={router}/>
            </LayoutBasic>
        );
    }
}

export default NextApp;
//export default withRedux(createStore)(withReduxSaga({ async: true })(NextApp));
