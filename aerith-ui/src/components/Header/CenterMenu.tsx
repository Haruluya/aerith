import React from 'react'
import './index.less'
import { Col, Menu,Row } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
// 中心菜单。
export default function CenterMenu() {
  return (
        <div>
        <Menu mode="horizontal" defaultSelectedKeys={['mail']} style={{ height: '100%', border: 0 }}>
            <Menu.SubMenu key="ComponentSubMenu" title="Components" icon={<SettingOutlined />}>
            <Menu.ItemGroup title="Item 1">
            <Menu.Item key="Home" icon={<AppstoreOutlined />}>
            Home
            </Menu.Item>
            <Menu.Item key="Header" icon={<AppstoreOutlined />}>
            Header
            </Menu.Item>
            <Menu.Item key="Footer" disabled>
            Footer
            </Menu.Item>
            </Menu.ItemGroup>
            </Menu.SubMenu>
            <Menu.Item key="homepage" icon={<MailOutlined />}>
            首页
            </Menu.Item>
            <Menu.Item key="strategy" icon={<MailOutlined />}>
            攻略
            </Menu.Item>
            <Menu.Item key="offcial" icon={<MailOutlined />}>
            官方
            </Menu.Item>
            <Menu.Item key="activity" icon={<MailOutlined />}>
            活动
            </Menu.Item>
            <Menu.SubMenu key="MoreSubMenu" title="更多" icon={<SettingOutlined />}>
            <Menu.ItemGroup title="Item 1">
            <Menu.Item key="Home1" icon={<AppstoreOutlined />}>
            Home
            </Menu.Item>
            <Menu.Item key="Header1" icon={<AppstoreOutlined />}>
            Header
            </Menu.Item>
            <Menu.Item key="Footer1" disabled>
            Footer
            </Menu.Item>
            </Menu.ItemGroup>
            </Menu.SubMenu>
        </Menu>
        </div>
    );
}
