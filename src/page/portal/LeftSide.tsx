import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Home', '/Portal/Home', <PieChartOutlined />),
  // getItem('不存在的路由', '/Portal/uiuiuiu', <ContainerOutlined />),

  getItem('路由相关测试', 'sub1', <DesktopOutlined />, [
    getItem('路由传参', '/Portal/Test'),
    getItem('不存在的路由', '/Portal/uiuiuiu'),
  ]),
  getItem('生命周期相关', 'sub2', <MailOutlined />, [
    getItem('生命周期', '/Portal/lifecycle'),
  ]),

  getItem('内置hook', 'sub3', <AppstoreOutlined />, [
    getItem('useContext', '/Portal/useContextTest'),
    getItem('useDIYHook', '/Portal/useDiy'),
    getItem('useReducer', '/Portal/useReducer'),
    getItem('useCallback', '/Portal/useCallback'),
    getItem('useMemo', '/Portal/useMemo'),
    getItem('Submenu', 'subiuiu', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
];

const LeftSide: React.FC = () => {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onClick = (item:any) => { 
        navigate(item.key+'?id=878787',{
      state:{
        name:'测试传值',
      }
    })
  }

  return (
    <div className="left-side">
      <div className="left-logo" onClick={toggleCollapsed}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <div className="left-menu">
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          inlineCollapsed={collapsed}
          items={items}
          onClick={ onClick}
        />
      </div>
    </div>
  );
};

export default LeftSide;