import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import {Layout,theme} from 'antd';
import './App.css';
import SideBar from "./SideBar";
import HeaderBar from "./HeaderBar";
import ContentDetails from "./ContentDetails";


const App = () => {


    return (
        <Router>
            <Layout>
               <SideBar />
                <Layout>
                    <HeaderBar />
                    <ContentDetails />
                </Layout>
            </Layout>
        </Router>
    );
};
export default App;
