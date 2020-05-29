import React, {useCallback, useState} from "react";
import styles from './index.less';
import DownOutlined from "@ant-design/icons/lib/icons/DownOutlined";
import UpOutlined from "@ant-design/icons/lib/icons/UpOutlined";

/**
 * 商品图片预览
 * 2020/5/29 12:01 上午 BY TF
 */
const GoodsImgPrev = () => {

    const [topPosition, setTopPosition] = useState(0)

    const testThums = new Array(8).fill(1);

    const onClickPrevBtn = useCallback((direction) => {
        console.log(direction)
        const top = direction === 'up' ? topPosition - 88 : topPosition + 88;
        console.log(top)
        setTopPosition(top);
    }, [topPosition])

    return (
        <div className={`${styles.goodsImgPrevWrap} fl fcb`}>
            <div className={`${styles.leftListWrap} fcb`}>
                <a className={`${styles.prevBtn}`} onClick={() => onClickPrevBtn('up')}><UpOutlined/></a>
                <div className={styles.thumListWrap}>
                    <ul className={styles.thumListInner} style={{top: topPosition}}>
                        {
                            testThums.map((o, i) => {
                                return (
                                    <li className={styles.item} key={i}>
                                        <a className={styles.alink}>
                                            <img className={`${styles.thumImg}`}
                                                 src="../../../static/images/test/hot1.png"
                                                 alt=""/>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <a className={`${styles.prevBtn}`} onClick={() => onClickPrevBtn('down')}><DownOutlined/></a>
            </div>
            <div className={`${styles.imgWrap}`}>

            </div>
        </div>
    )
}


export default GoodsImgPrev;
