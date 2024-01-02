import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    HomeOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import './App.css';

const { Header, Sider, Content } = Layout;
const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout
            style={{
            minHeight:'100vh',


            borderRadius: borderRadiusLG,
        }}>
            <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}
                   style={{

                       background:"#015A92",
                       borderRadius: borderRadiusLG,
                   }}
            >

                <Menu
                    style={{

                        background: "#015A92",
                        borderRadius: borderRadiusLG,
                    }}
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <HomeOutlined />,
                            label: 'Home',

                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',

                        },
                        {
                            key: '3',
                            icon: <LogoutOutlined />,
                            label: 'Logout',
                        },
                    ]}

                />
            </Sider>
            <Layout>
               <div className="header">
                   <Header
                           style={{
                               display:"flex",
                               padding: 0,
                               backgroundColor: "#015A92",
                           }}

                   >


                       <Button
                           styles={{
                               color:"white",

                           }}
                           type="text"
                           icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                           onClick={() => setCollapsed(!collapsed)}
                           style={{
                               fontSize: '16px',
                               width: 100,
                               height: 64,
                           }}

                       />

                       <div className="demo-logo">Medichive</div>
                   </Header>
               </div>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: '90vh',
                        minWidth:'100vw',
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >

                </Content>
            </Layout>
        </Layout>
    );
};
export default App;
