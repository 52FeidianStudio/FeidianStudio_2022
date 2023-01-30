import { useCallback, useEffect, useState } from "react";
import { Row, Col, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import alibabaDemosrc from "../assets/compony/alibaba.jpg"
import ByteDanceDemosrc from "../assets/compony/ByteDance.jpg"
import KingSortDemosrc from "../assets/compony/Kingsoft.jpg"
import TogetherDemosrc from "../assets/compony/pinduoduo.jpg"
import TencentDemosrc from "../assets/compony/Tencent.jpg"
import PostGraduateDemosrc from "../assets/compony/PostGraduate.png" 
import "../style/Notice.css"
import type { NOTICE_INFO } from "../type/homeType";

const ScrollPage: React.FC = function () {
    const notices: NOTICE_INFO[] = [
        {
            Name: "刘畅",
            description: "阿里巴巴集团",
            GraduationYear:"2022",
            imgSrc: alibabaDemosrc
        },
        {
            Name: "贺凡",
            description: "杭州字节跳动科技有限公司",
            GraduationYear:"2022",
            imgSrc: ByteDanceDemosrc
        },
        {
            Name: "陈宇豪",
            description: "阿里巴巴集团",
            GraduationYear:"2023",
            imgSrc: alibabaDemosrc
        },
        {
            Name: "张瑞龙",
            description: "考研",
            GraduationYear:"2023",
            imgSrc: PostGraduateDemosrc
        },
        {
            Name: "吴连雯",
            description: "拼多多",
            GraduationYear:"2022",
            imgSrc: TogetherDemosrc
        },
        {
            Name: "魏朝晖",
            description: "北京字节跳动科技有限公司",
            GraduationYear:"2023",
            imgSrc: ByteDanceDemosrc
        },
        {
            Name: "晏倫一",
            description: "武汉金山办公软件有限公司",
            GraduationYear:"2022",
            imgSrc: KingSortDemosrc
        },
        {
            Name: "石佳奇",
            description: "字节跳动科技有限公司",
            GraduationYear:"2021",
            imgSrc: ByteDanceDemosrc
        },
        {
            Name: "曹浩浩",
            description: "字节跳动科技有限公司",
            GraduationYear:"2022",
            imgSrc: ByteDanceDemosrc
        },
        {
            Name: "王成",
            description: "腾讯科技有限公司",
            GraduationYear:"2018",
            imgSrc: TencentDemosrc
        },
    ]

    const [scroll, setScroll] = useState(0);
    const [maxVal, setMaxVal] = useState(0);
    let items = document.getElementsByClassName("item");

    useEffect(() => {
        console.log(items.length);
        let iLength = items.length * 21;
        const tw = iLength;
        const sw = 84;
        setMaxVal(sw - tw);
    }, []);

    const toLeft = useCallback(() => {
        setScroll((prev) => {
            const next = prev + 42;
            return next;
        });
    }, []);

    const toRight = useCallback(() => {
        setScroll((prev) => {
            const next = prev - 42;
            return next;
        });
    }, [maxVal]);

    return (

        <div className="page_container">
            <div className="scrollWidth">
                <div className="notice_scroll">
                    <Button
                        shape="circle"
                        className="leftScrollBtn"
                        onClick={toLeft}
                        style={{ visibility: `${scroll == 0 ? "hidden" : "visible"}` }}
                    >
                        <LeftOutlined />
                    </Button>
                    <Button
                        shape="circle"
                        className="rightScrollBtn"
                        onClick={toRight}
                        style={{ visibility: `${scroll <= maxVal ? "hidden" : "visible"}` }}
                    >
                        <RightOutlined />
                    </Button>
                    <div className="scrollbox_container">
                        <div className="scrollbox_container_inner" style={{ transform: `translateX(${scroll}vw)` }}>
                            <div className="scrollbox_container_card">
                                <Row className="scrollbox_container_card_row">

                                    {notices.map((item, index) => {
                                        return (
                                            <Col className="scrollbox_container_card_col">
                                                <div className="item" key={index}>                                                                                                       
                                                    <div className="item1">
                                                        <img className="noticecard_img" src={item.imgSrc}/>
                                                        <div className="title_container">
                                                            <div className="noticecard_title">工作室成员：{item.Name}</div>
                                                            <div className="noticecard_GY">毕业年份：{item.GraduationYear}</div>
                                                            <div className="noticecard_description">毕业去向：{item.description}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        );
                                    })};
                                    
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ScrollPage;
