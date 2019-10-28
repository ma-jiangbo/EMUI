import React from "react";
import { Layout, Header, Content, Footer } from '../index'
import './layout.example.scss'

export default function () {
    return (
            <div>
                <Layout className="emui-example-custom-layout">
                    <Header>header</Header>
                    <Content>content</Content>
                    <Footer>footer</Footer>
                </Layout>
            </div>
    )
};
