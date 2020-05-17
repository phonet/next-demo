import Head from 'next/head';
import {Component} from 'react';

class Error extends Component {

	static getInitialProps(res) {
		console.log(res);
		//const statusCode = res ? res.statusCode : err ? err.statusCode : null;
		//return {statusCode};
		return {};
	}


	render() {
		return (
			<div>
				<Head>
					<meta name="viewport" content=""/>
					<title>报错了</title>
				</Head>
				<p>报错了~~~</p>
			</div>
		);
	}
}

export default Error;
