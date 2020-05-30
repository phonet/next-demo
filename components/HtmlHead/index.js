import Head from 'next/head.js';
import React from 'react';

/**
 * html的头部信息
 * 2020/5/20 1:08 上午 BY TF
 * @returns {*}
 * @constructor
 */
const HtmlHead = ({
                      title = '标题',
                      bodyBgColor = '#f8f8f8'
                  }) => {
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
    );
};

export default HtmlHead;
