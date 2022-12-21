import { Carousel } from "antd";
import homeBannerFe from "../assets/home/fe.png";
import homeBannerIos from "../assets/home/ios.png";
import homeBannerJava from "../assets/home/java.png";
import "../style/swiper.css";
/*
* 照片类型
*/
type imgType = {
    description:string,
    imgsrc:string
}
const swiperImg:imgType[] = [
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
export default function Swiper() {
  return (
    <div className="swiper_content">
      <Carousel autoplay>
        {swiperImg.map((item, index) => {
          return (
            <div>
              <h3 className="swiper">
                <img src={item.imgsrc} alt={item.description} />
              </h3>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
