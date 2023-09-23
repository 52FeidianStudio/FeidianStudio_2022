import { useCallback, useEffect, useState } from "react";
import { Row, Col, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
// import alibabaDemosrc from "../assets/compony/alibaba.jpg"
// import ByteDanceDemosrc from "../assets/compony/ByteDance.jpg"
// import KingSortDemosrc from "../assets/compony/Kingsoft.jpg"
// import TogetherDemosrc from "../assets/compony/pinduoduo.jpg"
// import TencentDemosrc from "../assets/compony/Tencent.jpg"
// import PostGraduateDemosrc from "../assets/compony/PostGraduate.png"
import "../style/notice.less"
import type { NOTICE_INFO } from "../type/homeType";
import apis from "../api/notice/notice"
const ScrollPage: React.FC = function () {
    const [notices, setNotices] = useState<NOTICE_INFO[]>([]);
    const [scroll, setScroll] = useState(0);
    const [maxVal, setMaxVal] = useState(0);
    let items = document.getElementsByClassName("item");

    // useEffect(() => {
    //     apis.Notices(1, 3).then(response => {
    //         const data = Object.values(response.data.data.list) as NOTICE_INFO[];
    //         setNotices(data);
    //         console.log(data)
    //     })
    // }, [])
    useEffect(() => {
        console.log(items.length);
        let iLength = items.length * 21;
        const tw = iLength;
        const sw = 84;
        setMaxVal(sw - tw);
    })
    useEffect(() => {
        apis.Notices().then(response => {
            const data = Object.values(response.data.data) as NOTICE_INFO[];
            setNotices(data);
            console.log(data)
        })
    }, [])
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
                        <div className="group_title">
                            <div className="group_title_bottom">Notices</div>
                        </div>
                        <div className="scrollbox_container_inner" style={{ transform: `translateX(${scroll}vw)` }}>
                            <div className="scrollbox_container_card">

                                <Row className="scrollbox_container_card_row">


                                    {notices.map((item, index) => {
                                        return (
                                            <Col className="scrollbox_container_card_col">


                                                <div className="item" key={index}>

                                                    <div className="item1" >


                                                        {/* <img className="noticecard_img" src={item.imgSrc} /> */}
                                                        <div className="title_container">
                                                            <div className="noticecard_title" >工作室成员：{item.name}</div>
                                                            <div className="noticecard_faculy"> 学院：{item.faculty}</div>
                                                            <div className="noticecard_sub">专业：{item.subject}</div>
                                                            <div className="noticecard_depart">方向：{item.department}</div>
                                                            <div className="noticecard_city" >城市：{item.city}</div>
                                                            <div className="noticecard_CP" >毕业去向：{item.company}</div>
                                                            {/* <div className="noticecard_GY" >毕业年份：{item.GraduationYear}</div>
                                                            <div className="noticecard_description" >毕业去向：{item.description}</div> */}




                                                        </div>
                                                    </div>
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
export default ScrollPage;
