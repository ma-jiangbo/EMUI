import React, {useState, Fragment} from 'react'
import Dialog, {alert, confirm, modal} from "./dialog";

export default function () {
    const [ visible, setVisible ] = useState(false);
    const openModal = () => {
        const close = modal(
            <div>
                <h1>modal</h1>
                <button onClick={() => {close()}}>close</button>
            </div>
        ).close
    };

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
            <div>
                <button onClick={() => {alert('q')}}>alert</button>
            </div>
            <div>
                <button onClick={
                    () => {confirm('q', () => {console.log('ok')}, () => {console.log('cancel')})}
                }>confirm</button>
            </div>
            <div>
                <button onClick={() => {openModal()}}>modal</button>
            </div>
        </Fragment>
    )

}
