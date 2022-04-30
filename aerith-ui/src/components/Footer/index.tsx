import { DefaultFooter } from '@ant-design/pro-layout';
import { Tooltip } from 'antd';
import { GithubOutlined, InfoCircleOutlined, WechatOutlined } from '@ant-design/icons';
import wechat from '@/assets/images/wechat.jpeg';
import styles from './index.less'
import React from 'react';

const Footer = () => {
  return (
      <div className={styles.footerContainer}>
        <DefaultFooter
          copyright="2022 Aerith's game froum | 暂未备案"
          className={styles.footer}
          links={[
            {
              key: 'github',
              title: (
                <Tooltip title="Github项目源码">
                  <GithubOutlined /> 关于项目
                </Tooltip>
              ),
              href: 'https://github.com',
              blankTarget: true,
            },
            {
              key: 'contact',
              title: (
                <Tooltip title={<img src={wechat} alt="微信" width="200" />}>
                  <WechatOutlined /> 关于作者
                </Tooltip>
              ),
              href: 'https://github.com',
              blankTarget: true,
            },
            {
              key: 'info',
              title: (
                <>
                <Tooltip title="关于Aerith...">
                  <InfoCircleOutlined /> Aerith
                </Tooltip>
                </>
              ),
              href: 'https://github.com',
              blankTarget: true,
            },
          ]}
        />
      </div>
  );
};

export default Footer;
