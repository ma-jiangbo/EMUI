import React from 'react'
import { modal } from "../index";

export default function () {
    const openModal = () => {
        const close = modal(
            <div>
                <h1>custom content...</h1>
                <h2>custom content...</h2>
                <h3>custom content...</h3>
                <p>不适用footer栏，自定义关闭按钮</p>
                <button onClick={() => {close()}}>close</button>
            </div>
        ).close
    };

    return (
        <div>
            <button onClick={() => {openModal()}}>modal</button>
        </div>
    )

};
