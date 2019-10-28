import * as React from "react";
import Demo from '../demo';
import DialogExample1 from './dialog.example';
import DialogExample2 from './dialog.example2';
import DialogExample3 from './dialog.example3';
import './dialog.example.scss'

const DialogDemo = () => {
    return (
        <div className='emui-dialog-demo'>
            <h2>Dialog 对话框</h2>
            <div className="desc">
                <p>模态框对话框，用于显示弹窗内容以及内容确认，提示，警告等</p>
                <h3>何时使用</h3>
                <p>
                    需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 <code>Modal</code> 在当前页面正中打开一个浮层，承载相应的操作。
                </p>
            </div>
            <Demo code={require('!!raw-loader!./dialog.example.tsx').default} describe='普通的弹窗， 有确认和取消按钮'>
                <DialogExample1/>
            </Demo>
            <Demo code={require('!!raw-loader!./dialog.example2.tsx').default} describe='确认弹窗与警告弹窗'>
                <DialogExample2/>
            </Demo>
            <Demo code={require('!!raw-loader!./dialog.example2.tsx').default} describe='普通Modal弹窗，没有按钮栏，内容自定义'>
                <DialogExample3/>
            </Demo>
        </div>
    )
};

export default DialogDemo;