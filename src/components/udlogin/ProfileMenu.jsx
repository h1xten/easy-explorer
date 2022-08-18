import { DownOutlined} from '@ant-design/icons';
import { Button, Dropdown, Menu, Space } from 'antd';
import React from 'react';

const ProfileMenu = ({userLogout}) => {
    const menu = (
        <Menu
          items={[
            {
              key: '1',
              label: (
                <p>address</p>
              ),
            },
            {
              key: '2',
              danger: true,
              label: (
                  <Button onClick={userLogout}>
                      Logout
                  </Button>
              ),
            },
          ]}
        />
      );

  return (
    <Dropdown overlay={menu}>
        <a onClick={(e) => e.preventDefault()}>
            <Space>
                Hover me
                <DownOutlined />
            </Space>
        </a>
    </Dropdown>
  )
}

export default ProfileMenu