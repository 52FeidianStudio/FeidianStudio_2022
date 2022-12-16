import feidianLogo from './assets/logo.png'
import './style/App.css'
function App() {
  return (
    <div className="App">
      <div>
        <a href="https://ifeidian.cc" target="_blank">
          <img src={feidianLogo} className="logo" alt="logo" />
        </a>
      </div>
      <div className='copyright'>桂ICP备2022000950号-2</div>
    </div>
  )
}
export default App
