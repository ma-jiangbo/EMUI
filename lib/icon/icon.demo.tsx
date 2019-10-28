import * as React from "react";
import Demo from '../demo';
import IconExample from './icon.example'
import './icon.demo.scss'

const IconDemo = () => {
    return (
        <div className="emui-icon-demo">
            <h2>Icon 图标</h2>
            <div className="desc">
                <p>svg矢量图标，自定义颜色，大小</p>
            </div>
            <Demo code={require('!!raw-loader!./icon.example.tsx').default}>
                <IconExample/>
            </Demo>
        </div>
    )
};

export default IconDemo;