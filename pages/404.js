import React from 'react';
import HtmlHead from '../components/HtmlHead';

const Page404 = () => {
    return (
        <div className={'noPage'}>
            <HtmlHead title={'404'}/>
            <img src="/static/images/404.png" width={400} height={200} alt=""/>
            <div className={`noPageMsg`}>喔,页面不存在了了了!</div>
        </div>
    );
};

export default Page404;
