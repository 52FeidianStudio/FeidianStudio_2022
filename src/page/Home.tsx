import React from "react";
import Swiper from "../component/Swiper";
import Project from "../component/Project";
import Notice from "../component/Notice";
import About from "../component/About";
const Home: React.FC = () => (
  <>
    <Swiper></Swiper>
    <Notice></Notice>
    <About></About>
    <Project></Project>
  </>
);
export default Home;
