import { Carousel } from "antd";
import homeBannerFe from "../assets/home/fe.png";
import homeBannerIos from "../assets/home/ios.png";
import homeBannerJava from "../assets/home/java.png";
import "../style/Swiper.css";
import type { IMG_TYPE } from "../type/homeType";
const swiperImg:IMG_TYPE[] = [
  {
    description: "feidianFe",
    imgsrc: homeBannerFe,
  },
  {
    description: "feidianIos",
    imgsrc: homeBannerIos,
  },
  {
    description: "feidianJava",
    imgsrc: homeBannerJava,
  },
];

const Swiper:React.FC = function () { 
  return (
    <div className="swiper_content">
      <Carousel autoplay>
        {swiperImg.map((item, index) => {
          return (
            <div key={index}>
              <h3 className="swiper">
                <a href="http://registration.52feidian.com/">
                <img src={item.imgsrc} alt={item.description} />
                </a>
              </h3>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
export default Swiper;