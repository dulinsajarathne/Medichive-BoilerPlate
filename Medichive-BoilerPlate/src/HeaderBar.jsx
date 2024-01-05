import React, {useState} from "react";
import { Layout, theme} from "antd";
import { UserOutlined} from "@ant-design/icons";
import './App.css'



const { Header } = Layout;


function HeaderBar(){


    return (
        <Header

            style={{
                position: 'fixed',
                top: 0,
                zIndex: -1,
                overflowXIndex: 1,
                minHeight:'13vh',
                minWidth: '100vw',
                left: 0,
                display: 'flex',
                paddingLeft: 0,


            }}


        >





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

