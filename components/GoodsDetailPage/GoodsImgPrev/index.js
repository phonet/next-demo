import React, {useCallback, useEffect, useState} from 'react';
import styles from './index.less';
import DownOutlined from '@ant-design/icons/lib/icons/DownOutlined';
import UpOutlined from '@ant-design/icons/lib/icons/UpOutlined';
import ImageScale from '../../../util/ImageScale';
import {getPicUrl} from '../../../util/Utils';

/**
 * 商品图片预览
 * 2020/5/29 12:01 上午 BY TF
 */
const GoodsImgPrev = ({list}) => {
    const picList = list;//new Array(6).fill(1);
    const [topPosition, setTopPosition] = useState(0);
    const [current, setCurrent] = useState({index: 0, url: getPicUrl(list[0])});

    const didMount = useEffect(() => {
        ImageScale();
    }, []);

    const onClickPrevBtn = useCallback((direction) => {
        console.log(direction);
        const top = direction === 'up' ? topPosition + 88 : topPosition - 88;
        console.log(top);
        setTopPosition(top);
    }, [topPosition]);

    const disabledUp = topPosition === 0 || picList.length < 5;
    const disabledDown = (Math.abs(topPosition) / 88) === picList.length - 4 || picList.length < 5;
    return (
        <div className={`${styles.goodsImgPrevWrap} fl fcb`}>
            <div className={`${styles.leftListWrap} fcb`}>
                <a className={`${styles.prevBtn} ${disabledUp ? styles.disabled : ''}`} onClick={() => {
                    if (disabledUp) {
                        console.log('上不可点');
                        return;
                    }
                    onClickPrevBtn('up');
                }}><UpOutlined/></a>
                <div className={styles.thumListWrap}>
                    <ul className={styles.thumListInner} style={{top: topPosition}}>
                        {
                            picList.map((o, i) => {
                                return (
                                    <li className={`${styles.item} ${current.index === i ? styles.active : ''}`}
                                        key={i}
                                        onMouseEnter={() => {
                                            setCurrent({
                                                index: i,
                                                url: getPicUrl(o)
                                            });
                                        }}
                                    >
                                        <a className={styles.alink}>
                                            <img className={`${styles.thumImg}`}
                                                 src={getPicUrl(o)}
                                                 alt=""/>
                                        </a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                <a className={`${styles.prevBtn} ${disabledDown ? styles.disabled : ''}`} onClick={() => {
                    if (disabledDown) {
                        console.log('下不可点');
                        return;
                    }
                    onClickPrevBtn('down');
                }}><DownOutlined/></a>
            </div>
            <div className={`${styles.imgBox}`} id={'box'}>
                <div className={`${styles.small}`} style={{backgroundImage: `url(${current.url})`}} id={'small'}>
                    <div className={`${styles.mask} hide`} id={'mask'}/>
                </div>
                <div className={`${styles.big} hide`} id={'big'}>
                    <img src={current.url} className={styles.bigImg}/>
                </div>
                <div className={`hide`} id={'local'}>
                    <p className="title">鼠标在图片中的坐标为: </p>
                    <p> x : <span></span></p>
                    <p> y : <span></span></p>
                </div>
            </div>
        </div>
    );
};


export default GoodsImgPrev;
