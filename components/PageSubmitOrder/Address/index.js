import React, {useEffect, useState} from 'react';
import styles from './index.less';
import AddressModal from '../../AddressModal';
import {getAddressListApi} from '../../../api/Api';
import {message} from 'antd';

/**
 * 收货地址
 * 2020/5/31 9:12 下午 BY TF
 */
const Address = ({onGetAddressId}) => {
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [currentItem, setCurrentItem] = useState({});
    const [dataSource, setDataSource] = useState([]);
    const [currentId, setCurrentId] = useState('');

    const getList = async () => {
        setLoading(true);
        try {
            const res = await getAddressListApi();
            setLoading(false);
            if (res.code === 20000) {
                setDataSource(res.data);
                if (currentId) {
                    onGetAddressId(currentId);
                } else {
                    const defAddress = res.data.find(o => o.defaultFlag) || {};
                    onGetAddressId(defAddress.id);
                }
            } else {
                message.info(`${res.message || '地址获取失败'}`);
            }
        } catch (e) {
            setLoading(false);
            message.error('地址获取失败');
        }
    };
    useEffect(() => {
        getList();
    }, []);


    return (
        <div className={`contentWidth`}>
            <div className={styles.title}>选择收货地址</div>
            <div className={`${styles.addressList} fcb`}>
                {
                    dataSource.map((o, i) => {
                        return (
                            <div
                                className={`${styles.item} ${currentId === o.id ? styles.active : (!currentId && o.defaultFlag) ? styles.active : ''}`}
                                key={o.id}
                                onClick={() => {
                                    setCurrentId(o.id);
                                    onGetAddressId(o.id);
                                }}
                            >
                                <div className={`${styles.nameWrap} fcb`}>
                                    <span className={`${styles.name} fl`}>{o.userName} 收 </span>
                                    {o.defaultFlag && <span className={`${styles.default} fr`}>默认</span>}
                                </div>
                                <div className={styles.address}>{o.address}</div>
                                <div>{o.phone}</div>
                                <a className={styles.modifyBtn}
                                   onClick={(e) => {
                                       e.preventDefault();
                                       e.stopPropagation();
                                       const tempArr = [o.country, o.city, o.county].filter(o => o);
                                       setCurrentItem({
                                           ...o,
                                           area: tempArr
                                       });
                                       setVisible(true);
                                   }}
                                >修改</a>
                            </div>
                        );
                    })
                }
            </div>
            <a className={styles.modifyAddrBtn} onClick={() => setVisible(true)}>+新建地址</a>
            {
                visible &&
                <AddressModal visible={visible}
                              initialValues={currentItem}
                              onCancel={() => {
                                  setVisible(false);
                                  setCurrentItem({});
                              }}
                              onOk={(values) => {
                                  getList();
                              }}
                />
            }
        </div>
    );
};


export default Address;
