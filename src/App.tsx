import './style/App.css'
import Header from './component/Header'
import Footer from './component/PageFooter'
import Home from './page/Home'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  )
}
export default App
