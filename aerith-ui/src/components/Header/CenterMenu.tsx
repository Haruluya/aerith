import React from 'react'
import './index.less'
import { Col, Menu,Row } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import {Link} from 'umi'
// 中心菜单。
export default function CenterMenu() {
  return (
        <div>
        <Menu mode="horizontal" defaultSelectedKeys={['mail']} style={{ height: '100%', border: 0 }}>
            {/* <Menu.SubMenu key="ComponentSubMenu" title="Components" icon={<SettingOutlined />}>
                <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="Home" icon={<AppstoreOutlined />}>
                     <Link to="/home">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="Header" icon={<AppstoreOutlined />}>
                      <Link to="/login">Login</Link>
                    </Menu.Item>
                    <Menu.Item key="Footer" disabled>
                    Footer
                    </Menu.Item>
                </Menu.ItemGroup>
            </Menu.SubMenu> */}
            <Menu.Item key="homepage" icon={<MailOutlined />}>
                <Link to="/home">首页</Link>
            </Menu.Item>
            <Menu.Item key="gossip" icon={<MailOutlined />}>
                <Link to="/gossip">闲聊</Link>
            </Menu.Item>
            <Menu.Item key="strategy" icon={<MailOutlined />}>
                <Link to="/strategy">攻略</Link>
            </Menu.Item>
            <Menu.Item key="official" icon={<MailOutlined />}>
                <Link to="/official">官方</Link>
            </Menu.Item>
            <Menu.Item key="activity" icon={<MailOutlined />}>
                <Link to="/activity">活动</Link>
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
