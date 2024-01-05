import React, {useState} from "react";
import {Layout, Menu, theme} from "antd";
import {HomeOutlined, LogoutOutlined, VideoCameraOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import HeaderBar from "./HeaderBar";
import {collapsed,setCollapsed} from "./HeaderBar";

const { Sider} = Layout;
function SideBar(){

    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();
    return (
        <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}

               style={{
                   overflow: 'auto',
                   height: '100vh',
                   position: 'fixed',
                   width: collapsed ? '50' : '150',
                   left: 0,
                   top: 0,
                   bottom: 0,
                   borderRadius: borderRadiusLG,


               }}>

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
export {collapsed,setCollapsed};
