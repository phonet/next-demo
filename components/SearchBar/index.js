import React, {useCallback, useState} from 'react';
import styles from './index.less';
import {Input, message} from 'antd';
import {globalSearchApi} from '../../api/Api';

const SearchBar = () => {
    const [keyword, setKeyWord] = useState('');
    const onSearch = useCallback(async () => {
        console.log(keyword);
        try {
            const res = await globalSearchApi(keyword);
            if (res.code === 20000) {
                console.log(res);
            } else {
                message.error(`${res.message || '搜索暂无结果'}`);
            }
        } catch (e) {
            message.error('暂无结果');
        }
    }, [keyword]);

    return (
        <div className={styles.searchBar}>
            <i className={styles.searchIcon}/>
            <Input className={styles.searchInput}
                   placeholder={'请输入'}
                   value={keyword}
                   onChange={e => {
                       // console.log(e);
                       setKeyWord(e.target.value);
                   }}
            />
            <a className={styles.searchBtn}
               onClick={() => onSearch()}
            >
                搜索
            </a>
        </div>
    );
};

export default SearchBar;
