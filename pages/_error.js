import Head from 'next/head';
import {Component} from 'react';
import HtmlHead from '../components/HtmlHead';

class Error extends Component {

    static getInitialProps(res) {
        console.log(res);
        //const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        //return {statusCode};
        return {};
    }


    render() {
        return (
            <div className={'noPage'}>
                <HtmlHead title={'404'}/>
                <img src="/static/images/404.png" width={400} height={200} alt=""/>
                <div className={`noPageMsg`}>喔,页面不存在了了了!</div>
            </div>
        );
    }
}

export default Error;
