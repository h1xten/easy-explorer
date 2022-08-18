import { DownOutlined} from '@ant-design/icons';
import { Button, Dropdown, Menu, Space } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProfileMenu = ({userLogout}) => {
    const userAddress = useSelector(state => state.UD.currentUD)
    const userSub = useSelector(state => state.UD.user.idToken.sub)

    const navigate = useNavigate()

    const menu = (
        <Menu
          items={[
            {
              key: '1',
              label: (
                  <p onClick={() => navigate(`explore/${userAddress}/1`)}>
                       Address {userAddress.substring(0, 10) + "..." }
                  </p>
              ),
            },
            {
                type: 'divider',
            },
            {
              key: '2',
              danger: true,
              label: (
                  <p onClick={userLogout}>
                      Logout
                  </p>
              ),
            },
          ]}
        />
      );

  return (
    <Dropdown overlayClassName='profile_dropdown_menu' overlay={menu} className = 'profile_menu'>
        <a onClick={(e) => e.preventDefault()}>
            <Space>
                {userSub}
                <DownOutlined />
            </Space>
        </a>
    </Dropdown>
  )
}

export default ProfileMenu