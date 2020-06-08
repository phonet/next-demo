import React, {useEffect, useState} from 'react';
import styles from './index.less';
import {Button, Cascader, Checkbox, Col, Form, Input, Modal, Row} from 'antd';
import {message} from 'antd';
import {getAllAreasApi, modifyAddressApi} from '../../api/Api';


const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 4},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 16},
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};


/*const residences = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];*/


const formatAreas = (data) => {
    if (!data || !data.length) return [];
    let restArr = [];
    restArr = data.map(o => {
        return {
            ...o,
            children: o.childNodes && o.childNodes.length > 0 ? formatAreas(o.childNodes) : null,
            value: o.name,
            label: o.name
        };
    });
    return restArr;
};

/**
 * 地址添加和修该弹窗
 * 2020/5/31 10:52 下午 BY TF
 */
const AddressModal = ({
                          visible,
                          initialValues = {},
                          onOk,
                          onCancel
                      }) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [residences, setResidences] = useState([]);

    const modifyAddress = async (sendData) => {
        setLoading(true);
        try {
            const res = await modifyAddressApi(sendData);
            setLoading(false);
            if (res.code === 20000) {
                closeModal();
                onOk && onOk(sendData);
            } else {
                message.error(`${res.message || '操作失败'}`);
            }
        } catch (e) {
            setLoading(false);
            message.error(`接口异常`);
        }
    };

    // 获取所有区域
    const getAllAreas = async () => {
        try {
            const res = await getAllAreasApi();
            // console.log(res)
            if (res.code === 20000) {
                const tempArr = formatAreas(res.data);
                setResidences(tempArr);
            } else {
                message.error('区域获取失败');
            }
        } catch (e) {
            message.error('区域获取接口异常');
        }
    };

    useEffect(() => {
        getAllAreas();
        return () => {

        };
    }, []);

    const closeModal = () => {
        form.resetFields();
        onCancel && onCancel();
    };
    return (
        <Modal
            title="添加/编辑地址"
            visible={visible}
            footer={null}
            // onOk={() => onOk && onOk()}
            onCancel={() => closeModal()}
            width={746}
            destroyOnClose
        >
            <Form {...formItemLayout}
                  form={form}
                  initialValues={initialValues}
                  onFinish={(values) => {
                      // form.resetFields();
                      console.log(values);
                      //onOk && onOk(values);
                      const sendData = {
                          ...initialValues,
                          ...values,
                          country: values.area[0],
                          city: values.area[1] || '',
                          county: values.area[2] || ''
                      };
                      delete sendData['area'];
                      console.log(sendData);
                      modifyAddress(sendData);
                  }}
            >
                <Form.Item
                    name="area"
                    label="所在地区"
                    rules={[
                        {type: 'array', required: true, message: '必填'},
                    ]}
                >
                    <Cascader options={residences} placeholder={'请选择省/市/区/街道'}/>
                </Form.Item>
                <Form.Item
                    name="address"
                    label="详细地址"
                    rules={[{required: true, message: '必填'}]}
                >
                    <Input.TextArea row={2} placeholder={'请填写详细地址，小于75字'}/>
                </Form.Item>
                <Form.Item
                    name="userName"
                    label="收货人姓名"
                    rules={[{required: true, message: '必填'}]}
                >
                    <Input placeholder={'请填写真实姓名'}/>
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="手机号码"
                    rules={[
                        {required: true, message: '必填'},
                        {
                            pattern: /^1(3|4|5|6|7|8|9)\d{9}$/,
                            message: '请输入有效手机号'
                        }
                    ]}
                >
                    <Input maxLength={11} placeholder={'请填写手机号码'}/>
                </Form.Item>
                <Form.Item label=" " name="defaultFlag" valuePropName="checked" colon={false}>
                    <Checkbox>设为默认地址</Checkbox>
                </Form.Item>
                <Row justify={'center'}>
                    <Col span={3}>
                        <Button loading={loading} disabled={loading} type="primary" htmlType="submit">确定</Button>
                    </Col>
                    <Col span={3}>
                        <Button onClick={() => closeModal()}>取消</Button>
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
};


export default AddressModal;
