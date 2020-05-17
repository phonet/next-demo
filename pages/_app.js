import App from 'next/app';
import '../static/styles/base.less';
import LayoutBasic from '../components/Layout/BasicLayout';
import React from 'react';

class NextApp extends App {

	static async getInitialProps({Component, ctx}) {
		let pageProps;
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps();
		}
		return {
			pageProps
		};

	}

	render() {
		const {Component, pageProps, store, router} = this.props;
		return (
			<LayoutBasic>
				<Component {...pageProps} router={router}/>
			</LayoutBasic>
		);
	}
}

export default NextApp;
//export default withRedux(createStore)(withReduxSaga({ async: true })(NextApp));