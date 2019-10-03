import React from 'react'
import ReactDom from 'react-dom'
import {HashRouter as Router, Link, Route} from 'react-router-dom'
import IconExample from "./icon/icon.example";
import ButtonExample from "./icon/button.example";

ReactDom.render(
    <Router>
        <div>
            <header>
                header
            </header>
            <div>
                <aside>
                    <h2>components</h2>
                    <ul>
                        <li>
                            <Link to='./icon'>icon</Link>
                        </li>
                        <li>
                            <Link to='./button'>input</Link>
                        </li>
                        <li>
                            <Link to='./icon'>button</Link>
                        </li>
                        <li>
                            <Link to='./icon'>table</Link>
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