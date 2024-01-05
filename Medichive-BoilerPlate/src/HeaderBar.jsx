import React, {useState} from "react";
import {Button, Layout, theme} from "antd";
import {MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined} from "@ant-design/icons";
import './App.css'


const { Header } = Layout;
const [collapsed, setCollapsed] = useState(false);

function HeaderBar(){
   const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    return (
        <Header
            style={{
                position: 'fixed',
                top: 0,
                zIndex: 2,
                overflowXIndex: 1,
                minWidth: '100vw',
                left: collapsed ? 80 : 200,
                display: 'flex',
                paddingLeft: 0,


            }}

        >
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                    fontSize: '16px',
                    width: 100,
                    height: 64,
                    color: "white",
                }}
            />
            <div className="demo-logo">Medichive</div>
            <UserOutlined style={{
                position: "fixed",
                top: 20,
                right: 20,

                color: "white",
                paddingRight: 50,
            }}/>

        </Header>
    )
}
export default HeaderBar;
export {collapsed,setCollapsed};
