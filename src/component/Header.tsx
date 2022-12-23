import '../style/Header.css'
import feidianLogo from '../assets/logo.png'
import { Menu } from 'antd'
import type { MenuProps } from 'antd';
import { MailOutlined, SettingOutlined,YuqueOutlined } from '@ant-design/icons';
import { useState } from 'react';
const items: MenuProps['items'] = [
  {
    label: 'Home',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'contact',
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
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  // {
  //   label: (
  //     <a href="http://ifeidian.cc" target="_blank" rel="noopener noreferrer">
  //       about
  //     </a>
  //   ),
  //   key: 'feidian',
  // },
];
const Header:React.FC = function () {
  const [current, setCurrent] = useState('mail');
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <div className='header_content'>
      <div className='header_logo'>
        <img src={feidianLogo} alt='logo' />
      </div>
      <div className='header_name'>沸点工作室</div>
      <div className='menu_content'>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}/>
      </div>
    </div>
  )
}
export default Header;