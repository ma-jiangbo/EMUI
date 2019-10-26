import React, { Fragment } from "react";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Layout from "./layout";
import Sider from "./sider";
import './layout.example.scss'

export default function () {
    return (
        <Fragment>
            <h3>example 1</h3>
            <div>
                <Layout className="emui-example-custom-layout">
                    <Header>header</Header>
                    <Content>content</Content>
                    <Footer>footer</Footer>
                </Layout>
            </div>
            <h3>example 2</h3>
            <div>
                <Layout className="emui-example-custom-layout">
                    <Header>header</Header>
                    <Layout>
                        <Sider>sider</Sider>
                        <Content>content</Content>
                    </Layout>
                    <Footer>footer</Footer>
                </Layout>
            </div>
            <h3>example 3</h3>
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
            <h3>example 4</h3>
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
        </Fragment>
    )
};
