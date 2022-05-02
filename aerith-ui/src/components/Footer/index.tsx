import { DefaultFooter } from '@ant-design/pro-layout';
import { Tooltip } from 'antd';
import { GithubOutlined, SmileFilled ,FileTextFilled ,HeartFilled,InfoCircleOutlined, WechatOutlined } from '@ant-design/icons';
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
                <Tooltip title={<img src={''} width="200" />}>
                  <SmileFilled /> 关于作者
                </Tooltip>
              ),
              href: 'https://github.com',
              blankTarget: true,
            },
            {
              key: 'aerith',
              title: (
                <>
                <Tooltip title="关于Aerith...">
                <HeartFilled /> Aerith
                </Tooltip>
                </>
              ),
              href: 'https://github.com',
              blankTarget: true,
            },
            {
              key: 'ff7',
              title: (
                <Tooltip title="ff7">
                  <FileTextFilled /> 关于ff7
                </Tooltip>
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
