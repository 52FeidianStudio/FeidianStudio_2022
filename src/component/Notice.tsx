import {  useCallback, useEffect, useState } from "react";
import { Row, Col, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import demosrc from "../assets/home/fe.png"
import "../style/Notice.css"
import type { NOTICE_INFO } from "../type/homeType";

export default function ScrollPage() {
    const notices:NOTICE_INFO[] = [
        {
            title: "Project Title1",
            description: "Project Description",
            data: "2022-12-19",
            imgSrc:demosrc
        },
        {
            title: "Project Title2",
            description: "Project Description",
            data: "2022-12-19",
            imgSrc:demosrc
        },
        {
            title: "Project Title3",
            description: "Project Description",
            data: "2022-12-19",
            imgSrc:demosrc
        },
        {
            title: "Project Title4",
            description: "Project Description",
            data: "2022-12-19",
            imgSrc:demosrc
        },
        {
            title: "Project Title5",
            description: "Project Description",
            data: "2022-12-19",
            imgSrc:demosrc
        },
        {
            title: "Project Title6",
            description: "Project Description",
            data: "2022-12-19",
            imgSrc:demosrc
        },
        {
            title: "Project Title7",
            description: "Project Description",
            data: "2022-12-19",
            imgSrc:demosrc
        },
    
    ]
    const [scroll, setScroll] = useState(0);
    const [maxVal, setMaxVal] = useState(0);
    useEffect(() => {
        const tw = 168;
        const sw = 84;
        setMaxVal(sw - tw);
    }, []);
    const toLeft = useCallback(() => {
        setScroll((prev) => {
            const next = prev + 42;
            return next;
        });
        console.log(scroll);
    }, []);
    const toRight = useCallback(() => {
        setScroll((prev) => {
            const next = prev - 42;
            return next;
        });
    }, [maxVal]);
    const isActive = true;
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
                                            <Col className="scrollbox_container_card_col" key={index}>
                                                <div className = {`item`}>
                                                    {/* <h4 className="noticecard_title">{item.title}</h4>
                                                    <div className="noticecard_description">{item.description}</div>
                                                    <div className="noticecard_data">{item.data}</div> */}
                                                    <img style={{objectFit:'cover',width:'200px',height:'250px',borderRadius:'10px'}} src={item.imgSrc}/>
                                                </div>
                                            </Col>
                                        );
                                    })}
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

