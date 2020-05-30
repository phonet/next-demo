import React, {useCallback, useEffect, useState} from "react";
import styles from './index.less';
import DownOutlined from "@ant-design/icons/lib/icons/DownOutlined";
import UpOutlined from "@ant-design/icons/lib/icons/UpOutlined";
import ImageScale from "../../../util/ImageScale";

/**
 * 商品图片预览
 * 2020/5/29 12:01 上午 BY TF
 */
const GoodsImgPrev = () => {
    const testThums = new Array(6).fill(1);
    const [topPosition, setTopPosition] = useState(0);
    const [current, setCurrent] = useState({index: 0, url: `../../../static/images/test/goods1.jpg`})

      const didMount = useEffect(() => {
          ImageScale()
      }, [])

    const onClickPrevBtn = useCallback((direction) => {
        console.log(direction)
        const top = direction === 'up' ? topPosition + 88 : topPosition - 88;
        console.log(top)
        setTopPosition(top);
    }, [topPosition])

    const disabledUp = topPosition === 0 || testThums.length < 5;
    const disabledDown = (Math.abs(topPosition) / 88) === testThums.length - 4 || testThums.length < 5;
    return (
        <div className={`${styles.goodsImgPrevWrap} fl fcb`}>
            <div className={`${styles.leftListWrap} fcb`}>
                <a className={`${styles.prevBtn} ${disabledUp ? styles.disabled : ''}`} onClick={() => {
                    if (disabledUp) {
                        console.log('上不可点')
                        return
                    }
                    onClickPrevBtn('up');
                }}><UpOutlined/></a>
                <div className={styles.thumListWrap}>
                    <ul className={styles.thumListInner} style={{top: topPosition}}>
                        {
                            testThums.map((o, i) => {
                                return (
                                    <li className={`${styles.item} ${current.index === i ? styles.active : ''}`}
                                        key={i}
                                        onMouseEnter={() => {
                                            setCurrent({
                                                index: i,
                                                url: `../../../static/images/test/goods${i + 1}.jpg`
                                            });
                                        }}
                                    >
                                        <a className={styles.alink}>
                                            <img className={`${styles.thumImg}`}
                                                 src={`../../../static/images/test/goods${i + 1}.jpg`}
                                                 alt=""/>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <a className={`${styles.prevBtn} ${disabledDown ? styles.disabled : ''}`} onClick={() => {
                    if (disabledDown) {
                        console.log('下不可点')
                        return
                    }
                    onClickPrevBtn('down');
                }}><DownOutlined/></a>
            </div>
            <div className={`${styles.imgWrap}`} id={'small'}>
                <img src={current.url} alt=""/>
                <div className={`${styles.mask} mask`}></div>
            </div>
            <div id="large" className={styles.large}>
                <img src={current.url} />
            </div>
        </div>
    )
}


export default GoodsImgPrev;
