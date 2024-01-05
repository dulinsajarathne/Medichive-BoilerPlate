import React, { useState } from 'react';

import {BrowserRouter as Router , Route, Link, Routes  } from "react-router-dom";

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
import Home from './components/Home';
import Nav2 from './components/Nav2';
import Logout from './components/Logout';
import Column from 'antd/es/table/Column';



const { Header, Sider, Content } = Layout;
const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
       <Router>
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
                       //marginLeft:'1vw',

                   }}
            >

                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    

                >
                     <Menu.Item key="1" icon={<HomeOutlined />}>
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            <Link to="/nav2">Nav2</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<LogoutOutlined />}>
                            <Link to="/logout">Logout</Link>
                        </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
               
                   <Header
                           style={{
                               position: 'fixed',
                               top: 0,
                               zIndex: 2,
                               overflowXIndex:1,
                               minWidth:'100vw',
                               
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
                   <Content style={{ margin: '0.5vw 1vw 0 1vw', overflow: 'initial' ,position:'absolute', top: '10vh',
                        left: collapsed ? 80:200,  }}>
          <div
            style={{
              minHeight:'100vh',
                minWidth: collapsed ?'91vw':'84vw',
              color:'black',
              padding: 24,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
           
            {/* {
              // indicates very long content
              Array.from({ length: 100 }, (_, index) => (
                <React.Fragment key={index}>
                  {index % 20 === 0 && index ? 'more' : '...'}
                  <br />
                </React.Fragment>
              ))
            } */}
              <Routes>
                 <Route path="/" element={<Home/>} />
                <Route path="/nav2" element={<Nav2/>} />
                <Route path="/logout" element={<Logout/>} />
                        
                    
             </Routes>

          </div>
        </Content>
                
            </Layout>



        </Layout>
        </Router>
    );
};
export default App;
