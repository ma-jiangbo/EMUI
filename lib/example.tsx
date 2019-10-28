import  React from 'react'
import ReactDom from 'react-dom'
import {HashRouter as Router, NavLink, Route} from 'react-router-dom'
import { Layout, Header, Content, Footer, Sider } from './index'
import IconDemo from "./icon/icon.demo";
import DialogDemo from "./dialog/dialog.demo";
import LayoutDemo from "./layout/layout.demo";
import Empty from './other/empty'
const logo = require('../asset/logo.png');
import './example.scss'

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
                            <NavLink className="link" to='./layout'>layout 布局</NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to='./icon'>icon 图标</NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to='./dialog'>dialog 对话框</NavLink>
                        </li>
                        <li>
                            <NavLink className="link" to='./table'>table 表格</NavLink>
                        </li>
                    </ul>
                </Sider>
                <Content className='example-layout-layout-content'>
                    <div>
                        <Route path='/' component={LayoutDemo} exact />
                        <Route path='/layout' component={LayoutDemo}/>
                        <Route path='/icon' component={IconDemo} />
                        <Route path='/dialog' component={DialogDemo} />
                        <Route path='/table' component={Empty} />
                    </div>
                </Content>
            </Layout>
            <Footer className='example-layout-footer'>
                &copy; majiangbo
            </Footer>
        </Layout>
    </Router>,
    document.querySelector('#root')
);