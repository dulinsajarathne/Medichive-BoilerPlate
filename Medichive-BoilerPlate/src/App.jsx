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
                       overflow: 'auto',
                       height: '100vh',
                       position: 'fixed',
                       width:collapsed?'50':'150',
                       left: 0,
                       top: 0,
                       bottom: 0,
                       borderRadius: borderRadiusLG,


                   }}
            >

                <Menu

                    theme="dark"
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
                               position: 'fixed',
                               top: 0,
                               width:'100vw',


                               left: collapsed ? 80:200,
                               display: 'flex',
                               paddingLeft:0,


                           }}

                   >


                       <Button

                           type="text"
                           icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                           onClick={() => setCollapsed(!collapsed)}
                           style={{
                               fontSize: '16px',
                               width: 100,
                               height: 64,
                               color:"white",
                           }}

                       />

                       <div className="demo-logo">Medichive</div>
                       <UserOutlined style={{
                           position:"fixed",
                           top:20,
                           right:20,

                           color:"white",
                           paddingRight:50,
                       }} />
                   </Header>
               </div>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: '100',
                        minHeight: '90vh',
                        width:'100vw',
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
