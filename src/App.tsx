import './style/App.css'
import Header from './component/Header'
import Swiper from './component/Swiper'
import Project from './component/Project'
import Footer from './component/PageFooter'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Swiper></Swiper>
      <Project></Project>
      <Footer></Footer>
    </div>
  )
}
export default App
