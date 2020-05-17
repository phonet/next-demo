import React from 'react';
import styles from './index.less';

const SearchBar = () => {
	return (
		<div className={styles.searchBar}>
			<i className={styles.searchIcon}/>
			<input className={styles.searchInput} placeholder={'请输入'}/>
			<a href={''} className={styles.searchBtn}>搜索</a>
		</div>
	);
};

export default SearchBar;