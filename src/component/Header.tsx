import '../style/header.css'
import feidianLogo from '../assets/logo.png'
import { Button } from 'antd'
export default function Header() {
  return (
    <div className='header_content'>
      <div className='header_logo'>
        <img src={feidianLogo} alt='logo' />
      </div>
      <div className='header_name'>沸点工作室</div>
      <div className='header_btn'>
        <Button type="primary">加入我们</Button>
      </div>
    </div>
  )
}
