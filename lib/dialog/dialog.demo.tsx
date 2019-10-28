import * as React from "react";
import Demo from '../demo';
import DialogExample1 from './dialog.example';
import DialogExample2 from './dialog.example2';

const DialogDemo = () => {
    return (
        <div>
            <div className="desc">

            </div>
            <Demo code={require('!!raw-loader!./dialog.example.tsx').default}>
                <DialogExample1/>
            </Demo>
            <Demo code={require('!!raw-loader!./dialog.example2.tsx').default}>
                <DialogExample2/>
            </Demo>
        </div>
    )
};

export default DialogDemo;