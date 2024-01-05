import React, {useState} from "react";
import {Layout, Menu, theme} from "antd";
import {HomeOutlined, LogoutOutlined, VideoCameraOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import './App.css'



const { Sider } = Layout;
function SideBar(){



    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}

               style={{
                   overflow: 'auto',
                   height: '100vh',
                   position: 'fixed',
                   //width: 250,
                   left: 0,
                   top: 0,
                   bottom: 0,
                   //borderRadius: borderRadiusLG,


               }}>
            <div className="demo-logo-vertical" />
            <div className="demo-logo">Medichive</div>

            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<HomeOutlined/>}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
                    <Link to="/nav2">Nav2</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<LogoutOutlined/>}>
                    <Link to="/logout">Logout</Link>
                </Menu.Item>
            </Menu>

        </Sider>
    )

}
export  default SideBar;

