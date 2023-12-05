import React from 'react';
import { Space, Alert } from 'antd';

export const NetworkLost = () => {
  return (
    <Space
      direction="vertical"
      style={{ width: 'content-border', marginTop: 30, display: 'flex', justifyContent: 'center' }}
    >
      <Alert message="Error: Internet connection lost" type="error" showIcon />
    </Space>
  );
};
