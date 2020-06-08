import React, {useEffect, useState} from 'react';
import styles from './index.less';
import {Table, message, Popconfirm, Button} from 'antd';
import {deleteAddressApi, getAddressListApi, setDefaultAddressApi} from '../../api/Api';
import AddressModal from '../AddressModal';

/**
 * 我的收货地址
 * 2020/6/6 3:09 下午 BY TF
 */
const MyAddressList = () => {
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [currentItem, setCurrentItem] = useState({});
    const [dataSource, setDataSource] = useState([]);

    const getList = async () => {
        setLoading(true);
        try {
            const res = await getAddressListApi();
            setLoading(false);
            if (res.code === 20000) {
                setDataSource(res.data);
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
    const columns = [
        {
            title: '收货人',
            dataIndex: 'userName',
            width: '10%',
        },
        {
            title: '收货地址',
            dataIndex: 'address',
            width: '50%',
        },
        {
            title: '联系电话',
            dataIndex: 'phone',
            width: '20%',
        },
        {
            title: '操作',
            dataIndex: 'action',
            width: '20%',
            render: (t, r) => {
                return (
                    <>
                        <a onClick={() => {
                            const tempArr = [r.country, r.city, r.county].filter(o => o);
                            setCurrentItem({
                                ...r,
                                area: tempArr
                            });
                            setVisible(true);
                        }}>修改</a>
                        <Popconfirm placement="top"
                                    title={'确定删除吗?'}
                                    onConfirm={async () => {
                                        try {
                                            const res = await deleteAddressApi(r.id);
                                            if (res.code === 20000) {
                                                getList();
                                                message.success('删除成功');
                                            } else {
                                                message.error(`${res.message || '删除失败'}`);
                                            }
                                        } catch (e) {
                                            message.error(`接口异常`);
                                        }
                                    }}
                                    okText="确定" cancelText="取消">
                            <a style={{margin: '0 8px'}}>删除</a>
                        </Popconfirm>
                        {
                            r.defaultFlag ?
                                <span className={styles.defTxt}>默认地址</span>
                                :
                                <Popconfirm placement="top"
                                            title={'确定要设为默认地址吗?'}
                                            onConfirm={async () => {
                                                try {
                                                    const res = await setDefaultAddressApi(r.id);
                                                    if (res.code === 20000) {
                                                        getList();
                                                        message.success('设置成功');
                                                    } else {
                                                        message.error(`${res.message || '设置失败'}`);
                                                    }
                                                } catch (e) {
                                                    message.error(`接口异常`);
                                                }
                                            }}
                                            okText="确定" cancelText="取消">
                                    <a>设为默认地址</a>
                                </Popconfirm>
                        }

                    </>
                );
            }
        },
    ];

    return (
        <>
            <div className={styles.title}>已保存收货地址 (共 {dataSource.length} 条)</div>
            <div style={{textAlign: 'right', marginBottom: 8}}>
                <Button type={'primary'}
                        onClick={() => {
                            setCurrentItem({});
                            setVisible(true);
                        }}>
                    +新增收货地址
                </Button>
            </div>
            <Table bordered
                   loading={loading}
                   dataSource={dataSource}
                   columns={columns}
                   rowKey={o => o.id}
                   pagination={false}
            />
            {
                visible &&
                <AddressModal visible={visible}
                              initialValues={currentItem}
                              onCancel={() => {
                                  setVisible(false);
                              }}
                              onOk={(values) => {
                                  getList();
                              }}
                />
            }
        </>
    );
};


export default MyAddressList;
