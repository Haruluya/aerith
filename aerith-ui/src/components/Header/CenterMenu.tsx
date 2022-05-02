import React from 'react'
import styles from './index.less'
import { Col, Menu,Row } from 'antd';
import {FullscreenExitOutlined, BankOutlined,GithubOutlined,CrownOutlined,ForkOutlined,AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import {Link} from 'umi'
// 中心菜单。
export default function CenterMenu() {
  return (
        <div className={styles.menu}>
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
            <Menu.Item key="homepage" icon={<FullscreenExitOutlined />}>
                <Link to="/home">首页</Link>
            </Menu.Item>
            <Menu.Item key="gossip" icon={<BankOutlined />}>
                <Link to="/gossip">闲聊</Link>
            </Menu.Item>
            <Menu.Item key="strategy" icon={<ForkOutlined />}>
                <Link to="/strategy">攻略</Link>
            </Menu.Item>
            <Menu.Item key="official" icon={<CrownOutlined />}>
                <Link to="/official">官方</Link>
            </Menu.Item>
            <Menu.Item key="feedback" icon={<GithubOutlined />}>
                <Link to="/feedback">反馈</Link>
            </Menu.Item>
            <Menu.SubMenu key="ActivitySubMenu" title="活动" icon={<SettingOutlined />}>
                <Menu.ItemGroup title="Aerith">
                    <Menu.Item key="archives" icon={<AppstoreOutlined />}>
                        <Link to="/archives">档案馆</Link>
                    </Menu.Item>
                </Menu.ItemGroup>
            </Menu.SubMenu>
        </Menu>
        </div>
    );
}
