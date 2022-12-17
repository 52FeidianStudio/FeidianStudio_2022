import { Carousel } from 'antd'
import homeBannerFe from '../assets/home/fe.png'
import homeBannerIos from '../assets/home/ios.png'
import homeBannerJava from '../assets/home/java.png'
import '../style/swiper.css'
export default function Swiper() {
  return (
    <div className='swiper_content'>
      <Carousel autoplay>
        <div>
          <h3 className='swiper'>
            <img src={homeBannerFe}/>
          </h3>
        </div>
        <div>
          <h3 className='swiper'>
          <img src={homeBannerJava}/>
          </h3>
        </div>
        <div>
          <h3 className='swiper'>
          <img src={homeBannerIos}/>
          </h3>
        </div>
      </Carousel>
    </div>
  );
}
