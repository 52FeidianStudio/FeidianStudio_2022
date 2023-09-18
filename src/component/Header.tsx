import '../style/Header.css'
import feidianLogo from '../assets/logo.png'
import { Menu, Modal } from 'antd'
import type { MenuProps } from 'antd';
import { MailOutlined, SettingOutlined, YuqueOutlined } from '@ant-design/icons';
import { useState } from 'react';
import qrCodeImg from '../assets/header/QR_code.png'
// import PubSub from 'pubsub-js'
// import Notice from '../component/Notice'
// import PageFooter from "./PageFooter";
// import Project from "./Project";
// import SwiperPage from "./Swiper";
// import About from "./About";
// import type { HEADER_INFO } from "../type/homeType";
import MenuItem from 'antd/es/menu/MenuItem';
interface ChildProps {
  move:(data:string)=>void
}
type MenuItemType = {
  label: string;
  key: string;
  type?: string
  icon?: React.ReactNode;
  targetId?: string;
  children?: MenuItemType[];
  
};
type HEADER_INFO = {
  items: MenuItemType[];
  targetId: string;
 

};
const items: HEADER_INFO['items'] = [
  // items : HEADER_INFO[],
  {
    label: '首页',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: '联系我们',
    key: 'contact',
    icon: <YuqueOutlined />,
  },
  {
    label: 'Goto',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        key:'setting1',
        children: [
          {
            label: '最新公告',
            key: 'setting:1:1', 
          },
          {
            label: '毕业去向',
            key: 'setting:1:2', 
          },
          {
            label: '关于我们',
            key: 'setting:1:3', 
          },
          {
            label: '组别结构',
            key: 'setting:1:4', 
          },
          {
            label: '项目展示',
            key: 'setting:1:5',
            
          },
          {
            label: '加入我们',
            key: 'setting:1:6', 
          },
          {
            label: '相关信息',
            key: 'setting:1:7', 
          },
        ],
      },
    ],
  }, 
];
const Header: React.FC<ChildProps> = function ({move}) {
  const [current, setCurrent] = useState('mail');
  const [isModalVisible, setIsModalVisible] = useState(false)
 
  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    if (e.key === 'contact') {
      setIsModalVisible(true);
    } else { 
      console.log('click ', e);
      move(e.key)
    }
  };
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
   <div className='top-bar'>
     <div className='header_content'>
     <div> 


     </div>
      <div className='header_logo'>
        <img src={feidianLogo} alt='logo' />
      </div>
      <div className='header_name'>沸点工作室</div>
      <div className='menu_content'>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      </div>
      <Modal
        visible={isModalVisible}
        onCancel={handleCloseModal}
        footer={null}>
        <div>
          <img src={qrCodeImg} alt="" />
        </div>
        <div>沸点工作室欢迎你的加入！</div>
      </Modal>
    </div>
   </div>
  )
}
export default Header;