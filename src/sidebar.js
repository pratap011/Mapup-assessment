import React, { useState } from 'react';
import { Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const { Sider, Content } = Layout;

const CollapsibleSidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
      <div>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth={0} // Hide collapsed sidebar
        width={300}
        style={{ zIndex: -1, position: 'fixed', left: 0, top: 0 }}
      >
        {/* Sidebar content */}
        {collapsed ? null : (
          <div style={{ height: '120vh', backgroundColor: '#001529', color: '#fff', textAlign: 'center' }}>
          </div>
        )}
      </Sider>
      <div
        className="toggle-icon"
        style={{
          position: 'fixed',
          top: 20,
          left: collapsed ? 0 : 80,
          zIndex: 0,
          fontSize: 24,
          color: '#1890ff',
          cursor: 'pointer',
        }}
        onClick={toggleSidebar}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      </div>
  );
};

export default CollapsibleSidebar;
