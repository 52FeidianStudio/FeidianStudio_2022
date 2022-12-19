import { Row, Col, Tabs } from "antd";
import { ProjectCard } from "./ProjectCard"
import projectImg1 from "../assets/home/ios.png";
import projectImg2 from "../assets/home/java.png";
import projectImg3 from "../assets/home/fe.png";
import "../style/project.css"
export default function Project() {

    const projects = [
        {
            title: "Project Title",
            description: "Project Description",
            imgUrl: projectImg1,
        },
        {
            title: "Project Title",
            description: "Project Description",
            imgUrl: projectImg2,
        },
        {
            title: "Project Title",
            description: "Project Description",
            imgUrl: projectImg3,
        },
        {
            title: "Project Title",
            description: "Project Description",
            imgUrl: projectImg3,
        },
        {
            title: "Project Title",
            description: "Project Description",
            imgUrl: projectImg1,
        },
        {
            title: "Project Title",
            description: "Project Description",
            imgUrl: projectImg2,
        },
    ]

    return (
        <section className="project" id="project">
            <div className="project_container">
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>我们的项目</p>
                        <div className="project_content">
                            <Row>
                                {
                                    projects.map((project, index) => 
                                            <ProjectCard
                                                key={index}
                                                {...project}
                                            />
                                    )
                                }
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}