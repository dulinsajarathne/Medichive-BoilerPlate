import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./side navigation/Home";
import Nav2 from "./side navigation/Nav2";
import Logout from "./side navigation/Logout";
import {Layout, theme} from "antd";


const {Content} = Layout;

function ContentDetails() {

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    return (
        <Content style={{
            margin: '0.5vw 1vw 0 1vw', overflow: 'initial', position: 'absolute', top: '10vh',
            left: collapsed ? 80 : 200,
        }}>
            <div
                style={{
                    minHeight: '100vh',
                    minWidth: collapsed ? '91vw' : '84vw',
                    color: 'black',
                    padding: 24,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >


                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/nav2" element={<Nav2/>}/>
                    <Route path="/logout" element={<Logout/>}/>


                </Routes>

            </div>
        </Content>
    )
}

export default ContentDetails;