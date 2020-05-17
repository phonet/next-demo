import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styles from './BasicLayout.less'

const LayoutBasic = ({children}) => {
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