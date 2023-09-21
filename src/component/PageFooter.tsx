import "../style/Footer.css"
import { Button } from 'antd';
import ProgramImg from '../assets/home/footer.gif'
import feidianLogo from '../assets/logo.png'
import WechatImg from '../assets/home/wechat.jpg'

const PageFooter:React.FC = function () {
    return (
        <div className="footer_container">
            <div className="footer_content">
                <div className="footer_content_right">
                    <div className="footer_right_line1">沸腾的心，飞扬的梦</div>
                    <div className="footer_right_line2">点滴积累，共码未来!</div>
                    <a href="http://182.254.242.96:3334/">
                        <Button type="primary">加入我们！</Button>
                    </a>
                </div>
                <div className="footer_content_left">
                    <img src={ProgramImg} alt="" />
                </div>
            </div>
            <footer className="footer_page">
                <div className="footer_page_inner">
                    <div className="footer_page_inner_container">
                        <div className="footer_logo">
                            <img src={feidianLogo} alt="" />
                        </div>
                        <div className="footer_page_content">
                            <div className="footer_aboutme">
                                <p>ABOUT US</p>
                                <li>关于我们</li>
                                <li>产品介绍</li>
                                <li>组织架构</li>
                                <li>成员去向</li>
                                <li>加入我们</li>
                            </div>
                            <div className="footer_project_details">
                                <p>我们的产品</p>
                                <li>媒体站</li>
                                <li>开源镜像站</li>
                                <li>软件站</li>
                            </div>
                        </div>

                        <div className="footer_wechat_img">
                            <div className="footer_wechat_img1">
                                <img src={WechatImg} alt="" />
                            </div>
                            <div className="footer_wechat_img2">
                                <img src={WechatImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_inner">
                    <div className="footer_inner_context">
                        <p>COPYRIGHT © 沸点工作室</p>
                        <p>地址：华中农业大学</p>
                        <p>E-mail:feidianstudio@163.com</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default PageFooter;