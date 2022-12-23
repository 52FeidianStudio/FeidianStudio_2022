import "../style/About.css";
import feidianImg from "../assets/home/1.jpg";
import { Tag } from "antd";
const About:React.FC = function () {
  return (
    <div className="about_container">
      <div className="about_content">
        <div className="about_img">
          <img src={feidianImg} alt="feidian" />
        </div>
        <div className="about_title">About Us</div>
        <div className="about_info">
          <div className="about_tag">
            <Tag color="success">大前端组</Tag>
            <Tag color="blue">JAVA组</Tag>
            <Tag color="processing">信息安全组</Tag>
            <Tag color="error">iOS组</Tag>
          </div>
          <p>沸点工作室成立于2010年</p>
          <p>是一个由本科生组成的技术为导向的IT人才孵化工作室</p>
          <p>以技术为导向，关注业内最新的技术栈</p>
          <p>应届毕业生入职于国内多家互联网大厂</p>
          <p>Email:feidianstudio@163.com</p>
          <p style={{fontSize:'12px'}}>地址：湖北省武汉市洪山区狮子山街1号逸夫楼c座地下室</p>
        </div>
      </div>
    </div>
  );
}
export default About;