import React, {useCallback, useEffect, useRef, useState} from "react";
import styles from './index.less';
import {getValidateCodeApi} from "../../../api/Api";
import {message} from "antd";


function useInterval(callback, delay) {
    const savedCallback = useRef();

    // 保存新回调
    useEffect(() => {
        savedCallback.current = callback;
    });

    // 建立 interval
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

/**
 * 获取验证码的按钮
 * 2020/6/3 1:06 上午 BY TF
 */
const CodeBtn = ({
                     mobile
                 }) => {
    // let internal = null;
    const [loading, setLoading] = useState(false);
    const [time, setTime] = useState(60);

    /* useEffect(() => {
         //setTimerCode();
     }, [time])*/
    /* useInterval(() => {
         if (time < 1) {
             setTime(10);
             return;
         }
         // 你自己的代码
         setTime(time - 1);
     }, 1000);*/


    const getCode = async () => {
        if (!mobile || !(/^1(3|4|5|6|7|8|9)\d{9}$/.test(mobile))) {
            message.info('请先输入有效的手机号码');
            return;
        }
        try {
            setLoading(true);
            const res = await getValidateCodeApi(mobile);
            console.log(res)
            setLoading(false);
            if (res.status === 200 && res.data.code === 20000) {
                message.success('验证码发送成功');
                setTimerCode();
            } else {
                message.error(`${res.data.message || '验证码获取失败'}`)
            }
        } catch (e) {
            setLoading(false);
        }
    }
    //定时器
    const setTimerCode = useCallback(() => {
        const internal = setInterval(() => {
            setTime(time => {
                // console.log(time)
                if (time < 1) {
                    clearInterval(internal);
                    return 60;
                }
                return time - 1
            });
        }, 1000)
    }, [])

    return (
        <a type="primary" className={styles.codeBtn} onClick={() => {
            if (time < 60 || loading) return;
            getCode();
        }}>{time < 60 ? time : '获取验证码'}</a>
    )
}


export default CodeBtn;
//获取验证码
