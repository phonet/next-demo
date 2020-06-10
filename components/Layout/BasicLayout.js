import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styles from './BasicLayout.less';
import {getLoginStorage} from '../../util/saveLogin';

const LayoutBasic = ({
                         children,
                         // userInfo
                     }) => {
    //const userInfo = getLoginStorage() || {}
    return (
        <>
            <Header/>
            <div id={'mainBody'} className={styles.main}>
                {children}
            </div>
            <Footer/>
        </>
    );
};
export default LayoutBasic;
