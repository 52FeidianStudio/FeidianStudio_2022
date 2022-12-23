import '../style/Header.css'
import feidianLogo from '../assets/logo.png'
import { Menu } from 'antd'
import type { MenuProps } from 'antd';
import { MailOutlined, SettingOutlined,YuqueOutlined } from '@ant-design/icons';
import { useState } from 'react';
const items: MenuProps['items'] = [
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
        children: [
          {
            label: '最新公告',
            key: 'setting:1',
          },
          {
            label: '毕业去向',
            key: 'setting:2',
          },
          {
            label: '关于我们',
            key: 'setting:2',
          },
          {
            label: '加入我们',
            key: 'setting:2',
          },
          {
            label: '相关信息',
            key: 'setting:2',
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