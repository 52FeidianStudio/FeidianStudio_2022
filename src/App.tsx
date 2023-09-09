import './style/App.css'
import React from 'react'
import Header from './component/Header'
import Footer from './component/PageFooter'
import Home from './page/Home'
const App: React.FC = function () {
  const  move = (data:string) => {
    const lastChar=data.charAt(data.length-1)
    let height
    if(lastChar=="1"){
      height=70
    }else if(lastChar=="2")
    {
      height=570
    }else if(lastChar=="3")
    {
      height=986
    }else if(lastChar=="4")
    {
      height=1650
    }else if(lastChar=="5"){
      height=2422
    }else{
      height=1000000
    }
    window.scrollTo({
      top:height,
      behavior:'smooth'
    })
  }

  return (
    <div className="App">
      <Header move={move} />
      <Home></Home>
      <Footer></Footer>
    </div>
  )
}
export default App
