import React, {useState} from 'react'
import Dialog from "./dialog";

export default function () {
    const [ visible, setVisible ] = useState(false);

    return (
        <div>
            <button onClick={() => setVisible(!visible)}>开启/关闭dialog</button>
            <Dialog visible={visible} buttons={
                [
                    <button key={1} onClick={() => setVisible(false)}>ok</button>,
                    <button key={2} onClick={() => setVisible(false)}>cancel</button>
                ]
            } onClose={() => setVisible(false)} maskClosable={false}>
                dialog content
            </Dialog>
        </div>
    )

}
