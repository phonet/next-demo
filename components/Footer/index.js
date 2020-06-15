import React from 'react';
import styles from './index.less';

const Footer = () => {
	return (
		<>
			<div className={styles.footerTop}>
				<div className={`contentWidth`}>
					<ul className={`fcb`}>
						<li className={styles.item}>
							<img src="../../static/images/warrw1.png" alt=""/>
							<a href="">正品保障</a>
						</li>
						<li className={styles.item}>
							<img src="../../static/images/warrw2.png" alt=""/>
							<a href="">严格监管</a>
						</li>
						<li className={styles.item}>
							<img src="../../static/images/warrw3.png" alt=""/>
							<a href="">商家认证</a>
						</li>
						<li className={styles.item}>
							<img src="../../static/images/warrw4.png" alt=""/>
							<a href="">售后无忧</a>
						</li>
					</ul>
					<div className={styles.telWrap}>
						<p className={styles.wxText}>官方微信公众号</p>
						<div className={`fcb`}>
							<img src="../../static/images/wx.png" alt="" className={styles.wxQRCode}/>
							<div className={styles.companyInfo}>
								<p>联系电话：13000000000 </p>
								<p>邮箱：119@qq.com</p>
								<p>联系地址：重庆渝北区大剧院3楼</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.footerBottom}>
				<a href="">隐私政策 - 世贸云</a>
				<p>
					© 2009－2019 ymatou.com, All rights reserved 增值电信业务经营许可证：沪B2-20140021 17 <br/>
					重庆渝商汇科技发展有限公司 版权所有 备案号（ 沪ICP备11050082号 ） <br/>
					重庆渝北区大剧院3楼
				</p>
				<p>
					<img src="" alt=""/>公网安备 3212122212122
				</p>
			</div>
		</>
	);
};

export default Footer;
