import React, { Fragment} from 'react'
import {alert, confirm, modal} from "../index";

export default function () {
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

};
