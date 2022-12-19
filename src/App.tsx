import './style/App.css'
import Header from './component/Header'
import Swiper from './component/Swiper'
import Project from './component/Project'
import Footer from './component/PageFooter'
import Notice from './component/Notice'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Swiper></Swiper>
      <Notice></Notice>
      <Project></Project>
      <Footer></Footer>
    </div>
  )
}
export default App
