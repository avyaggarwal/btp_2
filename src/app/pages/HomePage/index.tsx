import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import { PageHeader } from 'antd';
import { Divider } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import 'antd/dist/antd.css';

export function HomePage() {
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: '1st menu item',
        },
        {
          key: '2',
          label: '2nd menu item',
        },
        {
          key: '3',
          label: '3rd menu item',
        },
        {
          key: '4',
          label: '4th menu item',
        },
      ]}
    />
  );
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="An Abaqus Script Creator" />
      </Helmet>

      <Dropdown overlay={menu}>
        <a onClick={e => e.preventDefault()}>
          <Space>
            Hover me
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </>
  );
}
