import React from "react";
import Swiper from "../component/Swiper";
import Project from "../component/Project";
import Notice from "../component/Notice";
import About from "../component/About";
import Group from "../component/Group";
const Home: React.FC = function () {

  return(
    <>
    <Swiper></Swiper>
    <Notice></Notice>
    <About></About>
    <Group></Group>
    <Project></Project>
    </>
  )
};
export default Home;
