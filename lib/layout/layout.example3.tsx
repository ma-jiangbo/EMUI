import React from "react";
import { Layout, Header, Content, Footer, Sider } from '../index'
import './layout.example.scss'

export default function () {
    return (
            <div>
                <Layout className="emui-example-custom-layout">
                    <Header>header</Header>
                    <Layout>
                        <Content>content</Content>
                        <Sider>sider</Sider>
                    </Layout>
                    <Footer>footer</Footer>
                </Layout>
            </div>
    )
};
