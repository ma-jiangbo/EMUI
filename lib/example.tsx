import * as React from 'react'
import * as ReactDom from 'react-dom'
import {HashRouter as Router, Link, Route} from 'react-router-dom'
import IconExample from "./icon/icon.example";
import DialogExample from "./dialog/dialog.example";
import LayoutExample from './layout/layout.example'
import './example.scss'

ReactDom.render(
    <Router>
        <div className="emui-home-page">
            <header>
                <img src="../asset/logo.png" alt="logo"/>
                <span>EMUI</span>
            </header>
            <div className="content">
                <aside>
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <Link className="link" to='./icon'>icon</Link>
                        </li>
                        <li>
                            <Link className="link" to='./dialog'>dialog</Link>
                        </li>
                        <li>
                            <Link className="link" to='./layout'>layout</Link>
                        </li>
                        <li>
                            <Link className="link" to='./icon'>table</Link>
                        </li>
                    </ul>
                </aside>
                <main>
                    <Route path='/icon' component={IconExample} />
                    <Route path='/dialog' component={DialogExample} />
                    <Route path='/layout' component={LayoutExample}/>
                </main>
            </div>
        </div>
    </Router>,
    document.querySelector('#root')
);