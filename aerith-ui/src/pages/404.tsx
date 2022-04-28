import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';
import { SmileOutlined } from '@ant-design/icons';
const NoFoundPage: React.FC<{}> = () => (
  <Result
    title="NOT FOUND!"
    icon={<SmileOutlined />}
    extra={
      <Button type="primary" size="large" onClick={() => history.push('/home')}>
        返回首页
      </Button>
    }
  />
);

export default NoFoundPage;
