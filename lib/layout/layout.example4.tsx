import React from "react";
import { Layout, Header, Content, Footer, Sider } from '../index'
import './layout.example.scss'

export default function () {
    return (
        <div>
            <Layout className="emui-example-custom-layout">
                <Sider>sider</Sider>
                <Layout>
                    <Header>header</Header>
                    <Content>content</Content>
                    <Footer>footer</Footer>
                </Layout>
            </Layout>
        </div>
    )
};
