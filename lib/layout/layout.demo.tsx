import * as React from "react";
import Demo from '../demo';
import LayoutExample1 from './layout.example'
import LayoutExample2 from './layout.example2'
import LayoutExample3 from './layout.example3'
import LayoutExample4 from './layout.example4'
import './layout.example.scss'

const LayoutDemo = () => {
    return (
        <div className='emui-layout-demo'>
            <h2>Layout 布局</h2>
            <div className="desc">
                <p>协助进行页面级整体布局。</p>
                <h3>组件概述</h3>
                <ul>
                    <li>
                        <code>Layout</code>: 布局容器，其下可嵌套 <code>Header</code> <code>Content</code> <code>Footer</code> <code>Sider</code> 或 <code>Layout</code> 本身，可以放在任何父容器中。
                    </li>
                    <li>
                        <code>Header</code>: 顶部布局，自带默认样式，其下可嵌套任何元素，只能放在<code>Layout</code> 中。
                    </li>
                    <li>
                        <code>Sider</code>: 侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在<code>Layout</code>中。
                    </li>
                    <li>
                        <code>Content</code>: 内容部分，自带默认样式，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。
                    </li>
                    <li>
                        <code>Footer</code>: 底部布局，自带默认样式，其下可嵌套任何元素，只能放在 <code>Layout</code> 中。
                    </li>
                </ul>
            </div>
            <div>
                <Demo code={require('!!raw-loader!./layout.example.tsx').default} describe='普通三段式布局'>
                    <LayoutExample1/>
                </Demo>
                <Demo code={require('!!raw-loader!./layout.example2.tsx').default} describe='带有侧栏的三段式布局'>
                    <LayoutExample2/>
                </Demo>
                <Demo code={require('!!raw-loader!./layout.example3.tsx').default} describe='右侧栏布局'>
                    <LayoutExample3/>
                </Demo>
                <Demo code={require('!!raw-loader!./layout.example4.tsx').default} describe='整体侧栏布局'>
                    <LayoutExample4/>
                </Demo>
            </div>
        </div>
    )

};

export default LayoutDemo;