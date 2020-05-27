import {ArrowDownOutlined, ArrowUpOutlined, SortAscendingOutlined} from '@ant-design/icons';
import {Button, Input, Radio} from 'antd';
import React from 'react';
import styles from './index.less';

const Search = Input.Search;

/**
 * 综合排序
 * 2020/5/28 1:04 上午 BY TF
 * @returns {*}
 * @constructor
 */
const FilterBar = () => {
	return (
		<div className={`${styles.filterWrap} contentWidth fcb`}>
			<div className={`fl fcb`}>
				<Button.Group className={`${styles.btnGroup} fl`}>
					<Radio.Button value="1">综合<ArrowUpOutlined/></Radio.Button>
					<Radio.Button value="2">销量<ArrowDownOutlined/></Radio.Button>
					<Radio.Button value="3">新品<ArrowDownOutlined/></Radio.Button>
					<Radio.Button value="3">价格<SortAscendingOutlined/></Radio.Button>
				</Button.Group>
				<div className={`fl`}>
					<Input className={styles.inputW} prefix="￥"/>
					<Input className={styles.inputW} prefix="￥"/>
				</div>
			</div>
			<div className={`fr`}>
				<Search className={`${styles.searchWrap}`}
						placeholder="在当前条件下搜索"
						onSearch={value => console.log(value)}
				/>
			</div>
		</div>
	);
};

export default FilterBar;