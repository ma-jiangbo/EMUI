import React, {useState, Fragment} from 'react'
import { Dialog } from "../index";

export default function () {
    const [ visible, setVisible ] = useState(false);

    return (
        <Fragment>
            <div>
                <button onClick={() => setVisible(!visible)}>开启/关闭dialog</button>
                <Dialog title="普通对话框" visible={visible} buttons={
                    [
                        <button key={1} onClick={() => setVisible(false)}>ok</button>,
                        <button key={2} onClick={() => setVisible(false)}>cancel</button>
                    ]
                } onClose={() => setVisible(false)}>
                    dialog content
                </Dialog>
            </div>
        </Fragment>
    )
};
