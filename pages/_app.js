import App from 'next/app';
// import "antd/dist/antd.css"
import '../static/styles/base.less';
import LayoutBasic from '../components/Layout/BasicLayout';
import React from 'react';
import getCofnig from 'next/config'
import UserLayout from "../components/Layout/UserLayout";

const {serverRuntimeConfig, publicRuntimeConfig} = getCofnig()

console.log(serverRuntimeConfig, publicRuntimeConfig)

class NextApp extends App {

    static async getInitialProps({Component = {}, ctx}) {
        let pageProps;
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps();
        }
        return {
            pageProps
        };

    }

    render() {
        const {Component, pageProps, store, router = {}} = this.props;
        const {pathname} = router;
        console.log(router)
        console.log(pathname)
        if (pathname.indexOf('/user/') === 0) { //用户登录模块
            return (
                <UserLayout>
                    <Component {...pageProps} router={router}/>
                </UserLayout>
            )
        }
        return (
            <LayoutBasic>
                <Component {...pageProps} router={router}/>
            </LayoutBasic>
        );
    }
}

export default NextApp;
//export default withRedux(createStore)(withReduxSaga({ async: true })(NextApp));
