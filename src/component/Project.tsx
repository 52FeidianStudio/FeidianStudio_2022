import { Row, Col } from "antd";
import projectImg1 from "../assets/projects/atlas.png";
import projectImg2 from "../assets/projects/zizhu.png";
import projectImg3 from "../assets/projects/shishanyouni.png";
import projectImg4 from "../assets/projects/cron.png"
import projectImg5 from "../assets/projects/chart.png"
import projectImg6 from "../assets/projects/goal.png"
// import emptyImg from "../assets/projects/empty.png";
import type { PROJECT_INFO } from "../type/homeType";
import "../style/project.less";
const projects: PROJECT_INFO[] = [
  {
    title: "狮山图鉴",
    description: "一款收录了华中农业大学猫猫信息的小程序",
    imgUrl: projectImg1,
  },
  {
    title: "狮山有你iOS版本",
    description: "华中农业大学门户iOS客户端",
    imgUrl: projectImg3,
  },
  {
    title: "华中农业大学学生资助管理中心官网",
    description: "华中农业大学学生资助管理中心官网重构",
    imgUrl: projectImg2,
  },
  {
    title: "作物表型管理系统",
    description: "一套管理智慧农业的完整系统",
    imgUrl: projectImg5,
  },
  {
    title: "玉米组学管理系统",
    description: "一套为研究监测玉米的网页系统",
    imgUrl: projectImg4,
  },
  {
    title: "云·羊宝（有机）山羊养殖管理平台",
    description: "有机山羊的智慧养殖管理系统",
    imgUrl: projectImg6,
  },
];
const Project: React.FC = function () {
  function ProjectCard({ title, description, imgUrl }: any) {
    return (
      <div className="projectcard_container">
        <div className="project_imgbox">
          <img src={imgUrl} />
          <div className="project_text">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="project" id="project">
      <div className="project_container">
        <Row>
          <Col>
            <div className="title">Projects</div>
            <p>我们的项目</p>
            <div className="project_content">
              <Row>
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};
export default Project;
