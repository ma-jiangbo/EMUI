import * as React from 'react'
import * as ReactDom from 'react-dom'
import {HashRouter as Router, Link, Route} from 'react-router-dom'
import IconExample from "./icon/icon.example";
import ButtonExample from "./icon/button.example";
import './example.scss'

ReactDom.render(
    <Router>
        <div className="home-page">
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
                            <Link className="link" to='./button'>input</Link>
                        </li>
                        <li>
                            <Link className="link" to='./icon'>button</Link>
                        </li>
                        <li>
                            <Link className="link" to='./icon'>table</Link>
                        </li>
                    </ul>
                </aside>
                <main>
                    <Route path='/icon' component={IconExample} />
                    <Route path='/button' component={ButtonExample} />
                </main>
            </div>
        </div>
    </Router>,
    document.querySelector('#root')
);