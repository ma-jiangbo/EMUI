import  React from 'react'
import ReactDom from 'react-dom'
import {HashRouter as Router, NavLink, Route} from 'react-router-dom'
import { Layout, Header, Content, Footer, Sider } from './index'
// import IconExample from "./icon/icon.example";
import DialogExample from "./dialog/dialog.example";
import LayoutExample from './layout/layout.example';
const logo = require('../asset/logo.png');
import './example.scss'
import IconDemo from "./icon/icon.demo";

ReactDom.render(
    <Router>
        <Layout className='example-layout'>
            <Header className='example-layout-header'>
                <div className="icon">
                    <img style={{ width: '48px', height: '48px' }} src={logo} alt="logo"/>
                    <span>EMUI</span>
                </div>
            </Header>
            <Layout className='example-layout-layout'>
                <Sider className='example-layout-layout-sider'>
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <NavLink className="link" to='./icon'>icon</NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to='./dialog'>dialog</NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to='./layout'>layout</NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to='./table'>table</NavLink>
                        </li>
                    </ul>
                </Sider>
                <Content className='example-layout-layout-content'>
                    <Route path='/icon' component={IconDemo} />
                    <Route path='/dialog' component={DialogExample} />
                    <Route path='/layout' component={LayoutExample}/>
                </Content>
            </Layout>
            <Footer className='example-layout-footer'>
                &copy; majiangbo
            </Footer>
        </Layout>
    </Router>,
    document.querySelector('#root')
);